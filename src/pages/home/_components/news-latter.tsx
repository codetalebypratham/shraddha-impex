import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import HeroSection from "@/components/cards/hero-section";
import HeroDescription from "@/components/cards/hero-description";

const formSchema = z.object({
  email: z.string().email(),
});

const NewsletterSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast("Event has been created", {
      description: `Email: ${data.email}`,
      duration: 3000,
    });
  }

  return (
    <section className="py-12 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <HeroSection title="Subscribe to Our Newsletter" />
        <HeroDescription
          description=" Stay updated with our latest news and offers. Enter your email to
          subscribe."
        />
        <Form {...form}>
          <form
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="flex w-full max-w-xl items-center space-x-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input type="email" placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Subscribe</Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default NewsletterSection;
