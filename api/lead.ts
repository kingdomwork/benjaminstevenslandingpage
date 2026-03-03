import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, phone, campaign } = req.body;
    const apiKey = process.env.CRM_API_KEY;

    if (!apiKey) {
      console.error("CRM_API_KEY is missing");
      return res.status(500).json({ error: "Server configuration error" });
    }

    const nameParts = name.trim().split(" ");
    const firstname = nameParts[0];
    const lastname = nameParts.slice(1).join(" ") || "";

    // Map campaign ID to a readable category name
    const campaignMap: Record<string, string> = {
      "recruitment": "x eXp Recruitment",
      "lettings": "Lettings",
      "block-management": "Block Management",
      "auctions": "Auctions & Investments"
    };

    const campaignName = campaignMap[campaign] || campaign;

    const hubspotData = {
      properties: {
        email,
        firstname,
        lastname,
        phone,
        // Store the campaign source in the 'jobtitle' field for immediate visibility
        // and also try to set a custom 'campaign_category' property if it exists.
        jobtitle: `Lead Source: ${campaignName}`,
        campaign_category: campaignName
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
         return res.json({ success: true, message: "Contact already exists" });
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
}
