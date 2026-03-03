import "dotenv/config";
import express from "express";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for HubSpot
  app.post("/api/lead", async (req, res) => {
    try {
      const { name, email, phone, campaign } = req.body;
      const apiKey = process.env.CRM_API_KEY;

      if (!apiKey) {
        console.error("CRM_API_KEY is missing");
        return res.status(500).json({ error: "Server configuration error" });
      }

      // Split name into first and last
      const nameParts = name.trim().split(" ");
      const firstname = nameParts[0];
      const lastname = nameParts.slice(1).join(" ") || "";

      const hubspotData = {
        properties: {
          email,
          firstname,
          lastname,
          phone,
          // We can add a custom property for campaign if it exists in HubSpot, 
          // but to be safe we'll just stick to standard contact fields.
          // If you have a 'campaign_source' property, uncomment the line below:
          // campaign_source: campaign
        }
      };

      const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify(hubspotData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        
        // Handle "Contact already exists" error (409) gracefully
        if (response.status === 409) {
           console.log("Contact already exists, treating as success for frontend");
           return res.json({ success: true, message: "Contact updated (simulated)" });
        }

        console.error("HubSpot API Error:", errorData);
        return res.status(response.status).json({ error: "Failed to submit to CRM", details: errorData });
      }

      const data = await response.json();
      return res.json({ success: true, data });

    } catch (error) {
      console.error("Server Error:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static file serving (if needed locally, though Vercel handles this differently)
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
