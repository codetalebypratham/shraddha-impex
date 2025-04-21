import SectionWrapper from "@/components/cards/section-wrapper";
import ContactForm from "./_components/contact-form";
import Map from "./_components/map";

const ContactUsPage = () => {
  return (
    <div className="space-y-6 px-4">
      <SectionWrapper heroTitle="Reach out to us for an enquiry">
        <div className="flex flex-col items-center justify-center py-10 space-y-8">
          <ContactForm />
          <Map />
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ContactUsPage;
