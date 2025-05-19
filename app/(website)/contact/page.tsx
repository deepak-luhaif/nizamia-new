import BreadCrumb from '@/components/shared/BreadCrumb';
import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '../../../components/shared/ContactForm';
export default async function Contact() {
  return (
    <>
      <BreadCrumb
        name="Contact Us"
        tagline="Empower lives with a meaningful, lasting donation."
      />
      <div className="container-box ">
        <div className="flex lg:flex-row gap-10 flex-col">
          <div className="mt-5 ">
            <div className="mt-5 lg:w-[550px] w-full shadow-md">
              <ContactForm />
            </div>
          </div>
          <div>
            <div className=" mt-16 p-5 rounded-lg bg-darkBlue text-white">
              <div className="flex flex-row gap-2 items-center">
                <MapPin className="w-4 h-4 " />
                <h6 className="text-lg font-medium">Address: New Delhi</h6>
              </div>
              <div className="mt-2">
                <p>Assistance hours: Monday – Sunday, 10 am to 10 pm</p>
                <p className="mt-2">
                  T-384/B,Basti Hazrat Nizamuddin, Nizamuddin, New Delhi,110013
                </p>
              </div>
              <div className="flex flex-row gap-2 items-center mt-2">
                <Phone className="w-4 h-4" />
                <h6 className="text-lg font-medium">Phone: +91 85275 83935</h6>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <Mail className="w-4 h-4" />
                <h6 className="text-lg font-medium">
                  Email: support@nizamiatrust.org.in
                </h6>
              </div>
            </div>
          </div>
        </div>

        {/* map */}
        <div className="flex lg:flex-row flex-col gap-5 mt-20 ">
          <div className="w-full">
            {/* <div className=''>
              <h3 className='text-2xl'>Address: New Delhi</h3>
            </div> */}
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.586238278914!2d77.24016019999999!3d28.582184899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce302ce9a8601%3A0x90555f7bc68772cb!2sNizamia%20Charitable%20Trust!5e0!3m2!1sen!2sin!4v1739873665724!5m2!1sen!2sin"
                width="100%"
                height="700"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
