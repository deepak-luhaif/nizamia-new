import Donate from '@/components/shared/Donate';
import DonateModal from '@/components/shared/DonateModel';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Gift, Scissors, Stethoscope } from 'lucide-react';
import Image from 'next/image';
import Banner from './_components/Banner';

export default function CharityPage() {
  return (
    <div className="">
      <Banner />
      {/* Mission Statement */}
      <section className="container-box  my-4">
        <div className="lg:px-[150px] px-0 text-center">
          <p className="text-lg text-darkGray mb-8">
            At Nizamia Charitable Trust, we believe that true charity goes
            beyond temporary relief—it creates lasting opportunities for people
            to build better, healthier, and more independent lives. Through our
            Charity Gifts Program, we provide essential tools, medical aid, and
            livelihood support to empower those in need.
          </p>
          <p className="text-xl font-bold text-blueColor">
            A simple act of giving—a sewing machine, a nebulizer, a school kit,
            or a wheelchair—has the power to change a life forever. Your
            contribution can make a lasting impact by providing the right
            resources to those striving for a better future.
          </p>
        </div>
      </section>

      {/* Programs Tabs */}
      <div className="container-box bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-blueColor mb-12">
          Our Programs
        </h2>

        <Tabs defaultValue="livelihood" className="w-full ">
          <TabsList className="grid w-full  lg:h-20 h-auto grid-cols-1 md:grid-cols-3 mb-8 bg-greenColor">
            <TabsTrigger
              value="livelihood"
              className="text-lg py-3 font-roboto text-white"
            >
              <Scissors className="mr-2 h-5 w-5" />
              Livelihood Projects
            </TabsTrigger>
            <TabsTrigger
              value="medical"
              className="text-lg py-3 font-roboto text-white"
            >
              <Stethoscope className="mr-2 h-5 w-5" />
              Medical Aid
            </TabsTrigger>
            <TabsTrigger
              value="other"
              className="text-lg py-3 font-roboto text-white"
            >
              <Gift className="mr-2 h-5 w-5" />
              Other Initiatives
            </TabsTrigger>
          </TabsList>

          <TabsContent value="livelihood" className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-2xl font-bold text-blueColor mb-4">
                From Hardship to Self-Reliance
              </h3>
              <p className="text-darkGray mb-6">
                Many hardworking individuals struggle due to a lack of proper
                tools and training to sustain themselves. Our livelihood
                projects empower them with essential resources and skills,
                enabling them to overcome poverty and build a secure future. By
                providing education, vocational training, and necessary support,
                we help individuals gain financial independence and stability.
                These initiatives create lasting change, transforming lives by
                equipping people with the means to earn a sustainable income and
                break the cycle of hardship for generations to come.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              <Card>
                <CardHeader>
                  <CardTitle className="text-blueColor">
                    Sewing Machine Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-md overflow-hidden mb-4">
                    <Image
                      src="/assets/images/what-we-do/charity/Card Images/Sewing Machine Distribution.png"
                      alt="card-img"
                      height={0}
                      width={0}
                      sizes="100vw"
                      className=" w-full h-60 object-cover"
                    />
                  </div>
                  <p className="text-darkGray">
                    Women who complete our tailoring training receive a sewing
                    machine, empowering them to start their own business. This
                    opportunity enables them to earn a sustainable income,
                    achieve financial independence, and support their families,
                    breaking the cycle of poverty and creating a better future
                    for themselves and their communities.
                  </p>
                </CardContent>
                <CardFooter>
                  <DonateModal />
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-blueColor">
                    Vocational Training & Toolkits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-md overflow-hidden mb-4">
                    <Image
                      src="/assets/images/what-we-do/charity/Card Images/Vocational Training & Toolkits.png"
                      alt="card-img"
                      height={0}
                      width={0}
                      sizes="100vw"
                      className=" w-full h-60 object-cover"
                    />
                  </div>
                  <p className="text-darkGray">
                    Graduates of our mobile repair, embroidery, and computer
                    training programs receive essential toolkits to start
                    working immediately. A sewing machine, toolkit, or small
                    grant provides the foundation for financial independence,
                    empowering individuals to build a stable livelihood and
                    secure a brighter future for themselves and their families.
                  </p>
                </CardContent>
                <CardFooter>
                  <DonateModal />
                </CardFooter>
              </Card>
            </div>
            <div className=" text-greenColor font-semibold text-xl">
              A sewing machine, a toolkit, or a small grant can be the key to
              financial independence and a brighter future.
            </div>
          </TabsContent>

          <TabsContent value="medical" className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-2xl font-bold text-blueColor mb-4">
                Medical Aid
              </h3>
              <p className="text-darkGray mb-6">
                For many children and elderly individuals with respiratory
                illnesses, a nebulizer can be life-changing, making the
                difference between breathing comfortably and struggling for air.
                However, many low-income families cannot afford these vital
                medical devices, leaving their loved ones vulnerable to severe
                health complications. By providing nebulizers to those in need,
                we can help improve their quality of life, ensuring they receive
                the essential respiratory care required to breathe easily and
                live healthier, more comfortable lives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-blueColor">
                    Nebulizers for Children & the Elderly
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-md overflow-hidden mb-4">
                    <Image
                      src="/assets/images/what-we-do/charity/Card Images/Nebulizers for Children & the Elderly.png"
                      alt="card-img"
                      height={0}
                      width={0}
                      sizes="100vw"
                      className=" w-full h-60 object-cover"
                    />
                  </div>
                  <p className="text-darkGray">
                    Supporting individuals with asthma, chronic lung conditions,
                    and breathing difficulties by providing essential medical
                    care and resources. Our efforts ensure access to life-saving
                    treatments, helping them manage symptoms, improve
                    respiratory health, and lead more comfortable lives. With
                    proper support, they can breathe easier and enjoy a better
                    quality of life.
                  </p>
                </CardContent>
                <CardFooter>
                  <DonateModal />
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-blueColor">
                    Mobility Aids
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-md overflow-hidden mb-4">
                    <Image
                      src="/assets/images/what-we-do/charity/Card Images/Mobility Aids.png"
                      alt="card-img"
                      height={0}
                      width={0}
                      sizes="100vw"
                      className=" w-full h-60 object-cover"
                    />
                  </div>
                  <p className="text-darkGray">
                    Wheelchairs, walkers, and crutches provide essential support
                    for the elderly and disabled, enhancing their mobility and
                    independence. These aids empower individuals to move freely,
                    perform daily tasks with ease, and improve their quality of
                    life, ensuring dignity, confidence, and greater
                    participation in their communities.
                  </p>
                </CardContent>
                <CardFooter>
                  <DonateModal />
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-blueColor">
                    {' '}
                    Essential Medical Kits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-md overflow-hidden mb-4">
                    <Image
                      src="/assets/images/what-we-do/charity/Card Images/Essential Medical Kits.png"
                      alt="card-img"
                      height={0}
                      width={0}
                      sizes="100vw"
                      className=" w-full h-60 object-cover"
                    />
                  </div>
                  <p className="text-darkGray">
                    Providing first-aid kits and basic medical supplies to
                    low-income families ensures they have essential care during
                    emergencies. These supplies help treat minor injuries,
                    prevent infections, and offer immediate relief, promoting
                    better health and well-being for those who lack access to
                    adequate medical resources.
                  </p>
                </CardContent>
                <CardFooter>
                  <DonateModal />
                </CardFooter>
              </Card>
            </div>
            <div className=" text-greenColor font-semibold text-xl">
              For those suffering from chronic respiratory issues, a nebulizer
              or oxygen concentrator is not a luxury—it is a necessity. By
              donating, you can help a child or an elderly person breathe easier
              and live with dignity.
            </div>
          </TabsContent>

          <TabsContent value="other" className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-2xl font-bold text-blueColor mb-4">
                Other Charity Gift Initiatives
              </h3>
              <p className="text-darkGray mb-6">
                Every charity gift is a powerful investment in a brighter
                future. Whether it’s a tool that helps someone earn a living, a
                device that enables easier breathing, or a kit that supports
                learning, your generosity creates lasting change. These
                essential resources empower individuals, providing them with
                opportunities to overcome challenges and build better lives.
                Your support makes a meaningful difference, offering hope,
                stability, and the foundation for a healthier, more independent
                future for those in need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-blueColor">
                    {' '}
                    School Kits for Children
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-md overflow-hidden mb-4">
                    <Image
                      src="/assets/images/what-we-do/charity/Card Images/School Kits for Children.png"
                      alt="card-img"
                      height={0}
                      width={0}
                      sizes="100vw"
                      className=" w-full h-60 object-cover"
                    />
                  </div>
                  <p className="text-darkGray">
                    Providing books, stationery, and school bags helps
                    underprivileged students pursue their education without
                    barriers. These essentials equip them for learning, boost
                    their confidence, and create opportunities for a brighter
                    future. Your support ensures every child has the tools
                    needed to succeed in school and beyond.
                  </p>
                </CardContent>
                <CardFooter>
                  <DonateModal />
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-bueColor">
                    {' '}
                    Food & Essentials Hampers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-md overflow-hidden mb-4">
                    <Image
                      src="/assets/images/what-we-do/charity/Card Images/Food & Essentials Hampers.png"
                      alt="card-img"
                      height={0}
                      width={0}
                      sizes="100vw"
                      className=" w-full h-60 object-cover"
                    />
                  </div>
                  <p className="text-darkGray">
                    We provide nutritional aid to widows, orphans, and
                    struggling families facing food insecurity. By ensuring
                    access to essential food supplies, we help vulnerable
                    individuals maintain their health and well-being, offering
                    relief from hunger and the support needed to rebuild their
                    lives with dignity and hope.
                  </p>
                </CardContent>
                <CardFooter>
                  <DonateModal />
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-blueColor">
                    Seasonal Relief Kits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-md overflow-hidden mb-4">
                    <Image
                      src="/assets/images/what-we-do/charity/Card Images/Seasonal Relief Kits.png"
                      alt="card-img"
                      height={0}
                      width={0}
                      sizes="100vw"
                      className=" w-full h-60 object-cover"
                    />
                  </div>
                  <p className="text-darkGray">
                    Providing blankets, warm clothing, and hot meals helps
                    individuals endure extreme weather conditions. These
                    essentials offer warmth, protection, and nourishment,
                    ensuring vulnerable communities stay safe and healthy. Your
                    support can make a life-saving difference, bringing comfort
                    and relief to those struggling in harsh climates.
                  </p>
                </CardContent>
                <CardFooter>
                  <DonateModal />
                </CardFooter>
              </Card>
            </div>
            <div className=" text-greenColor font-semibold text-xl">
              A small gift can spark a lifetime of change—empower lives, create
              opportunities, and spread hope with meaningful charity gifts.
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="text-center py-4">
        <p className="text-orangeColor leading-[30px] font-semibold text-xl italic">
          “Give a gift that keeps on giving. <br /> Help us empower lives
          today.”
        </p>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 container-box items-center">
        <div className="flex flex-col gap-4">
          <h4 className="text-2xl text-blueColor font-semibold">
            Join the Mission
          </h4>
          <p className="text-darkGray leading-[30px]   text-lg ">
            Inspiring Charity Gifts: A Gift That Keeps on Giving
          </p>
          <p className="text-darkGray leading-[30px]   text-lg ">
            A simple gift can change a life forever. By providing essential
            tools, medical aid, and livelihood support, you create opportunities
            for a brighter future. Your generosity empowers individuals, fosters
            independence, and strengthens communities. Give a gift that truly
            makes a difference today!
          </p>
        </div>
        <Donate />
      </div>
    </div>
  );
}
