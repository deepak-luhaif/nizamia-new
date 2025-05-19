import Heritage from '../about/_components/Heritage';
import JoinUs from '../about/_components/JoinUs';
import Mission from '../about/_components/Mission';
import Nizamia from '../about/_components/Nizamia';
import data from './_components/data';
export default function AboutUs() {
  return (
    <>
      <div className="max-w-7xl mx-auto p-6 space-y-12 lg:mt-24 mt-14">
        {/* Introduction Section */}

        <section className="relative  py-16 px-6 md:px-12">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              A Legacy of <span className="text-[#fe9c3c]">Service</span> and{' '}
              <span className="text-[#fe9c3c]">Compassion</span>
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed">
              At{' '}
              <span className="font-semibold text-gray-900">
                Nizamia Charitable Trust
              </span>
              , our foundation is rooted in the timeless principles of
              <span className="font-medium"> love, unity, and compassion</span>
              —values that have guided humanity for generations. Established by{' '}
              <span className="font-semibold">Syed Dr. Mohd Ali Nizami</span>, a
              direct descendant of the revered{' '}
              <span className="font-semibold">
                Hazrat Nizamuddin Aulia (RA)
              </span>
              , our mission champions{' '}
              <span className="font-medium">selfless service</span> and the{' '}
              <span className="font-medium">upliftment of communities</span>.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Inspired by this profound lineage, we strive to make a{' '}
              <span className="font-semibold">tangible difference</span> in the
              lives of those in need. Our initiatives transcend boundaries of
              region, faith, and background. We believe that{' '}
              <span className="font-medium">serving humanity</span> is the
              highest form of devotion. Through various initiatives, we aim to{' '}
              <span className="font-medium">
                alleviate suffering, empower individuals,
              </span>{' '}
              and foster collective well-being.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              From <span className="font-medium">feeding programs</span> to{' '}
              <span className="font-medium">educational initiatives</span> that
              pave the way for a brighter future, and{' '}
              <span className="font-medium">emergency relief programs</span>{' '}
              that provide immediate support during crises—our work addresses
              the most critical challenges faced by marginalized communities.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Our vision extends beyond the past. We are dedicated to building a{' '}
              <span className="font-semibold">compassionate future</span>, where
              every individual has access to the resources and support needed to
              lead a dignified life. Guided by the enduring spirit of service,{' '}
              <span className="font-semibold">Nizamia Charitable Trust</span>{' '}
              stands as a beacon of hope, striving to create a{' '}
              <span className="font-medium">
                more just and caring society for all
              </span>
              .
            </p>
          </div>
        </section>

        {/* <section className="space-y-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          A Legacy of Service and Compassion
        </h1>
        <p className="text-gray-600">
          At Nizamia Charitable Trust, our foundation is built on timeless
          principles of love, unity, and compassion. Established by Syed Dr.
          Mohd Ali Nizami, a descendant of Hazrat Nizamuddin Aulia (RA), our
          mission champions selfless service and community upliftment.
        </p>
      </section> */}

        {/* <div>
        <h2 className="text-2xl font-semibold text-gray-900">Our Legacy</h2>
        {data?.map((item) => {
          return (
            <>
              <div>
                <img src={item?.image} />
              </div>
              <div>{item?.description}</div>
            </>
          );
        })}
      </div> */}

        {/* <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">
          Our Legacy
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-2xl overflow-hidden"
            >
              <div className="w-full md:w-1/2">
                <img
                  src={item?.image}
                  alt={item?.title}
                  className="w-full h-64 object-cover rounded-l-2xl md:rounded-none md:rounded-l-2xl"
                />
              </div>

              <div className="w-full md:w-1/2 p-6 space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item?.title}
                </h3>
                <p className="text-gray-600">{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}

        <div className="relative border-l border-gray-300 ml-8 space-y-16">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Our Legacy Timeline
          </h2>

          {data?.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row md:items-center"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-2 top-8 w-4 h-4 bg-[#FBBF24] rounded-full border-2 border-white shadow-lg z-10"></div>

              {/* Title Overlay */}
              <div className="absolute left-2 top-4 w-96 text-start z-10">
                <h3 className="text-md font-semibold text-[#FBBF24] bg-white px-2 py-1 rounded shadow-md">
                  {item?.title}
                </h3>
              </div>

              {/* Content Wrapper */}
              <div
                className={`md:w-1/2 p-4 ${
                  index % 2 === 0 ? 'md:pr-8 md:ml-auto' : 'md:pl-8 md:mr-auto'
                }`}
              >
                <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 relative">
                  <p className="text-gray-600 leading-relaxed">
                    {item?.description}
                  </p>
                </div>
              </div>

              {/* Image Wrapper */}
              <div
                className={`md:w-1/2 p-4 ${
                  item?.image2 ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : ''
                }`}
              >
                <img
                  src={item?.image}
                  alt={item?.title}
                  className="w-full h-64 object-contain rounded-2xl shadow-md border border-gray-100"
                />
                {item?.image2 && (
                  <img
                    src={item?.image2}
                    alt={`${item?.title} - Additional`}
                    className="w-full h-64 object-contain rounded-2xl shadow-md border border-gray-100"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        {/* <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Our Mission
            </h2>
            <p className="text-gray-600">
              We strive to make a tangible difference, transcending regional and
              faith boundaries to aid anyone facing hardship. From feeding the
              hungry to empowering through education, we aim to foster
              collective well-being.
            </p>
          </div>
          <Image
            src="/assets/images/shoot/DSC08857.jpg"
            alt="Mission"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </section> */}

        {/* Key Initiatives */}
        {/* <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            Core Initiatives
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Feeding programs providing meals to the underprivileged.</li>
            <li>Educational initiatives fostering brighter futures.</li>
            <li>Emergency relief supporting families in crises.</li>
          </ul>
        </section> */}

        {/* Legacy Highlights */}
        {/* <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Legacy Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <figure>
            <Image
              src="/images/rajiv-gandhi.jpg"
              alt="Rajiv Gandhi with Dr. Nizami"
              width={400}
              height={300}
              className="rounded-lg shadow"
            />
            <figcaption className="mt-2 text-sm text-gray-500">
              Dr. Nizami with Rajiv Gandhi (1987)
            </figcaption>
          </figure>
          <figure>
            <Image
              src="/images/emmanuel-macron.jpg"
              alt="Emmanuel Macron Visit"
              width={400}
              height={300}
              className="rounded-lg shadow"
            />
            <figcaption className="mt-2 text-sm text-gray-500">
              French President Emmanuel Macron at Nizamuddin Dargah
            </figcaption>
          </figure>
          <figure>
            <Image
              src="/images/atal-bihari-vajpayee.jpg"
              alt="Atal Bihari Vajpayee Visit"
              width={400}
              height={300}
              className="rounded-lg shadow"
            />
            <figcaption className="mt-2 text-sm text-gray-500">
              Atal Bihari Vajpayee engaging with the community
            </figcaption>
          </figure>
        </div>
      </section> */}

        {/* Closing Vision Statement */}
        {/* <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          Our Vision for the Future
        </h2>
        <p className="text-gray-600">
          We envision a compassionate future where every individual has the
          resources and support to lead a dignified life. Guided by the enduring
          spirit of service, we continue to stand as a beacon of hope.
        </p>
      </section> */}
      </div>
      {/* <About /> */}
      <Nizamia />
      <Mission />
      <Heritage />
      <JoinUs />
    </>
  );
}
