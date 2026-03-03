import { useForm } from "react-hook-form";
import { Button, Input } from "@/components/ui/form-elements";
import { useState } from "react";
import { motion } from "motion/react";
import { toast } from "sonner";

interface LeadFormProps {
  campaign: string;
  ctaText?: string;
}

export function LeadForm({ campaign, ctaText = "Submit" }: LeadFormProps) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/lead', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, campaign }) 
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setIsSubmitting(false);
      setIsSuccess(true);
      reset();
      toast.success("Details submitted successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitting(false);
      toast.error("Something went wrong. Please try again.");
    }
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }}
        className="bg-green-900/20 border border-green-500/30 p-6 rounded-lg text-center"
      >
        <h3 className="text-xl font-serif text-green-400 mb-2">Thank You!</h3>
        <p className="text-slate-300">We've received your details and will be in touch shortly.</p>
        <Button onClick={() => setIsSuccess(false)} className="mt-4 bg-slate-800 text-white hover:bg-slate-700">
          Send another
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md mx-auto">
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
        <Input 
          {...register("name", { required: "Name is required" })} 
          placeholder="John Doe"
        />
        {errors.name && <span className="text-red-400 text-xs mt-1">{errors.name.message as string}</span>}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">Email Address</label>
        <Input 
          {...register("email", { 
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })} 
          placeholder="john@example.com"
          type="email"
        />
        {errors.email && <span className="text-red-400 text-xs mt-1">{errors.email.message as string}</span>}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">Phone Number</label>
        <Input 
          {...register("phone", { required: "Phone number is required" })} 
          placeholder="+44 7700 900000"
          type="tel"
        />
        {errors.phone && <span className="text-red-400 text-xs mt-1">{errors.phone.message as string}</span>}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full text-base font-semibold py-6">
        {isSubmitting ? "Processing..." : ctaText}
      </Button>
      
      <p className="text-xs text-slate-500 text-center mt-4">
        Your data is secure. By submitting, you agree to our privacy policy.
      </p>
    </form>
  );
}
