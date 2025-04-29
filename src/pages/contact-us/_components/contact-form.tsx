import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { User, Mail, Phone, Globe, Building } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(6, "Phone is required"),
  company: z.string().min(1, "Company name is required"),
  website: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type ContactFormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      website: "",
      message: "",
    },
  });
  const scriptURL = import.meta.env.VITE_WEB_APP;
  const onSubmit = async (data: ContactFormValues) => {
    try {
      const params = new URLSearchParams({
        ...data,
        origin: window.location.origin,
      });

      await axios.post(scriptURL, params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      toast.success("Message submitted successfully!");
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("There was an error submitting the form.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel>Name*</FormLabel>
                  <FormControl>
                    <div>
                      <User className="absolute left-3 top-9 text-muted-foreground w-4 h-4" />
                      <Input
                        placeholder="Your name"
                        {...field}
                        className="pl-9"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel>Email*</FormLabel>
                  <FormControl>
                    <div>
                      <Mail className="absolute left-3 top-9 text-muted-foreground w-4 h-4" />
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        {...field}
                        className="pl-9"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel>Mobile no*</FormLabel>
                  <FormControl>
                    <div>
                      <Phone className="absolute left-3 top-9 text-muted-foreground w-4 h-4" />
                      <Input
                        type="tel"
                        placeholder="Phone number"
                        {...field}
                        className="pl-9"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel>Company name*</FormLabel>
                  <FormControl>
                    <div>
                      <Building className="absolute left-3 top-9 text-muted-foreground w-4 h-4" />
                      <Input
                        placeholder="Company"
                        {...field}
                        className="pl-9"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel>Website</FormLabel>
                  <FormControl>
                    <div>
                      <Globe className="absolute left-3 top-9 text-muted-foreground w-4 h-4" />
                      <Input
                        type="url"
                        placeholder="www.example.com"
                        {...field}
                        className="pl-9"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message*</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Your message..."
                    {...field}
                    className="min-h-[120px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-center">
            <Button type="submit" variant={"secondary"}>
              Submit Message
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
