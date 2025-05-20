import type { Initiatives } from '@/types/initiatives';

export const initiatives: Initiatives = {
  'feeding-programs': {
    id: 'feeding-programs',
    title: 'Feeding Programs',
    tagline: 'Nourishing Lives, One Meal at a Time',
    image: '/assets/images/what-we-do/feeding/banner.png',

    description:
      'Nizamia Charitable Trust believes food is a basic right, and no one should go hungry. Since 1983, our Feeding Programs have provided cooked meals, ration kits, and support to individuals and families facing food insecurity due to poverty, displacement, or crisis.',
    programs: [
      {
        title: 'Community Meal Distribution',
        description:
          'Ensuring everyone has access to warm, nutritious meals while upholding dignity, compassion, and a sense of community for those in need.',
        image:
          '/assets/images/what-we-do/feeding/Cooked Meals Distribution.png',
        bulletPoints: [
          {
            text: 'Food Distribution Centers',
            description:
              ' We set up centers in key locations where volunteers serve freshly prepared, nutritious meals to those in need, ensuring no one goes hungry.',
          },

          {
            text: 'Serving Vulnerable Communities',
            description:
              'Our initiative supports the homeless, low-income families, and individuals facing food insecurity, offering them a warm meal in a welcoming space.',
          },

          {
            text: 'A Safe & Inclusive Environment',
            description:
              'A Safe & Inclusive Environment: More than just food distribution, our centers foster a strong sense of community ensuring dignity, gender equality, and religious inclusion at every location we serve.',
          },
        ],
      },
      {
        title: 'Sustaining Families with Essential Ration Kits',
        description:
          'Ensuring essential food supplies for vulnerable families, offering stability, nutrition, and support during crises and challenging times.',
        image: '/assets/images/home/food.jpeg',

        bulletPoints: [
          {
            text: 'Essential Groceries for Daily Nutrition',
            description:
              'We distribute ration kits containing staple items like rice, flour, lentils, oil, and other necessities to ensure families have access to balanced meals.',
          },
          {
            text: 'Support During Crises & Special Occasions',
            description:
              ' These kits provide relief to families facing food insecurity, especially during emergencies, seasonal hardships, and festive periods, ensuring no one goes hungry.',
          },

          {
            text: 'Long-Term Impact on Communities',
            description:
              ' By offering extended food support, we help families maintain stability, reduce financial stress, and improve overall well-being through sustained access to essential nutrition.',
          },
        ],
      },
      {
        title: 'Nourishing Communities in Times of Need',
        description:
          'Providing essential food support during special occasions and emergencies to ensure no one goes hungry during difficult times.',
        image:
          '/assets/images/what-we-do/feeding/Ramadan & Special Occasions.png',

        bulletPoints: [
          {
            text: 'Special Occasion Food Drives',
            description:
              'During Ramadan and festivals like Diwali and Christmas, we distribute iftar, suhoor, and festive food packages to underserved communities, fostering joy and inclusion.',
          },

          {
            text: 'Emergency Relief Efforts',
            description:
              ' In times of natural disasters, economic crises, or humanitarian emergencies, we provide immediate food assistance through meal distributions and ration kits, prioritizing vulnerable families.',
          },
          {
            text: 'Compassion in Action',
            description:
              'Our food programs ensure nourishment and dignity, bringing comfort to those struggling during celebrations or crises, making a lasting impact.',
          },
        ],
      },
    ],
    video: '/assets/images/what-we-do/feeding/feeding.mp4',

    gallary: [
      '/assets/images/what-we-do/feeding/5 Images/1.png',
      // "/assets/images/what-we-do/feeding/5 Images/2.png",
      '/assets/images/shoot/food/1.jpg',
      '/assets/images/what-we-do/feeding/5 Images/3.png',
      '/assets/images/what-we-do/feeding/5 Images/4.png',
      '/assets/images/what-we-do/feeding/5 Images/5.png',
    ],

    sub_tagline: 'Join the Mission',
    sub_title: 'Fighting Hunger, One Meal at a Time',
    quote:
      'Ending hunger starts with a single meal. Together, we can nourish lives, spread kindness, and create a world without hunger.',
    video_story:
      'Our team regularly distributes freshly cooked meals to underprivileged and needy individuals across Delhi-NCR, spreading nourishment and care where it’s needed most.',
    video_tagline:
      'Millions struggle with food insecurity, unsure of their next meal. Your support can provide nutritious meals, ration kits, and essential food aid to those in need. Every contribution brings hope and nourishment. Together, we can combat hunger and build a healthier, stronger community.',
  },
  'healthcare-support': {
    isImageGrid: true,

    id: 'healthcare-support',
    title: 'Healthcare Support',
    tagline: 'Bringing Hope & Healing',
    image: '/assets/images/shoot/healthcare/health-banner.webp',
    // '/assets/images/what-we-do/healthcare/Banner/Healthcare Support Banner.png',

    description:
      'Access to quality healthcare remains a distant dream for millions. Many suffer in silence, unable to afford treatment or basic medical aid. We step in to bridge this gap, ensuring that no one is left behind.',
    programs: [
      {
        title: 'Medical Aid: Bridging the Healthcare Gap',
        description:
          'Healthcare should not be a privilege but a fundamental right. Our initiatives ensure that people receive:',
        image: '/assets/images/what-we-do/healthcare/medical.jpeg',

        bulletPoints: [
          {
            text: 'Free Medical Check-ups',
            description:
              ' Early diagnosis can save lives. We provide free screenings and consultations to detect health issues before they become critical.',
          },
          {
            text: 'Essential Medicines',
            description:
              'Many patients cannot afford life-saving medications. We distribute free medicines to ensure no one suffers due to lack of access.',
          },
          {
            text: 'Financial Support for Treatments',
            description:
              "When treatments are beyond a family's financial capacity, we step in to assist, covering medical costs and hospital expenses.",
          },
        ],
      },
      {
        title: 'Cataract Surgeries: Restoring the Gift of Sight',
        description:
          'Vision impairment due to cataracts is a leading cause of blindness, yet it is easily treatable. Through our cataract surgery programs:',
        image: '/assets/images/what-we-do/healthcare/cataract.jpeg',

        bulletPoints: [
          {
            text: 'restore eyesight',
            description:
              'We help restore eyesight for those who would otherwise remain in darkness.',
          },
          {
            text: 'independent life',
            description:
              'Each surgery gives individuals the ability to work, care for their families, and lead an independent life.',
          },
        ],
      },
      {
        title: 'Community Health Camps: Reaching the Unreached',
        description:
          'Many remote and underprivileged communities lack access to even basic healthcare. Our community health camps provide:',
        image: '/assets/images/what-we-do/healthcare/camp.jpeg',

        bulletPoints: [
          {
            text: 'Free diagnosis and treatment',
            description:
              'From common illnesses to chronic conditions, our medical professionals offer expert care where it is needed most.',
          },
          {
            text: 'Preventive Healthcare Services',
            description:
              'Educating communities about hygiene, nutrition, and disease prevention to promote long-term well-being.',
          },
          {
            text: 'Specialized Support',
            description:
              'From maternal health to child nutrition, our camps address a variety of critical healthcare needs.',
          },
        ],
      },
    ],
    video: '/assets/images/what-we-do/healthcare/health-video.mp4',

    gallary: [
      '/assets/images/shoot/healthcare/1.png',
      '/assets/images/shoot/healthcare/2.png',
      '/assets/images/shoot/healthcare/3.jpg',
      '/assets/images/shoot/healthcare/4.jpg',
      '/assets/images/shoot/healthcare/13.jpg',
      '/assets/images/shoot/healthcare/6.jpg',
      '/assets/images/shoot/healthcare/15.jpg',
      '/assets/images/shoot/healthcare/12.jpg',
      '/assets/images/shoot/healthcare/10.jpg',
    ],

    sub_tagline: 'Join the mission',
    sub_title: 'Bringing Healthcare Within Reach',
    quote:
      'Healthcare is not a privilege; it is a right. A healthier world begins with compassion, access, and care for all.',
    video_story:
      'We supported the medical treatment of a woman who survived an acid attack. Today, she has recovered well, showing immense strength & resilience in her journey toward healing.',
    video_tagline:
      'Millions struggle to access basic healthcare, leaving treatable conditions unchecked. Your support can change lives by providing medical aid, restoring vision, and delivering essential treatments to those in need. Every contribution brings hope and healing. Together, we can make healthcare accessible for all and build a healthier future.',
  },
  education: {
    id: 'education',
    title: 'Education',
    tagline: 'Breaking the Cycle of Poverty',
    image: '/assets/images/banner-2.png',

    description:
      'Education is a powerful tool that paves the way for a brighter future. Yet, thousands of underprivileged children are deprived of quality learning due to financial and social barriers. Since 1983, we have been committed to changing this reality by ensuring access to education for all.',
    programs: [
      // {
      //   title: 'Nurturing Young Minds, Building Bright Futures',
      //   description:
      //     'Empowering underprivileged children with the education they deserve, fostering confidence, and igniting a lifelong passion for learning.',

      //   bulletPoints: [
      //     {
      //       text: 'Academic Support for Low-Income Students',
      //       description:
      //         'We help children from underserved communities stay on track with their studies, ensuring they don’t fall behind due to financial hardships.',
      //     },
      //     {
      //       text: 'Boosting Confidence & Self-Belief',
      //       description:
      //         'Through personalized guidance and mentorship, we instill confidence in children, helping them realize their full potential and embrace learning with enthusiasm.',
      //     },
      //     {
      //       text: 'Creating a Love for Learning',
      //       description:
      //         'Our programs focus on making education enjoyable and engaging, encouraging children to develop curiosity, critical thinking, and a passion for knowledge.',
      //     },
      //   ],
      //   image: '/assets/images/what-we-do/education/support.jpg',
      // },
      {
        title: 'English Language Classes for a Brighter Future',
        description:
          'Strong communication skills in English open doors to education, employment, and personal growth. Our language programs empower children and young adults with essential fluency for a successful future.',

        bulletPoints: [
          {
            text: 'Comprehensive Learning Approach',
            description:
              'We provide structured English classes covering grammar, vocabulary, and conversational skills to help students communicate effectively and confidently.',
          },

          {
            text: 'Practical Communication Training',
            description:
              'Interactive sessions, role-playing, and real-world conversations ensure students gain confidence in speaking, writing, and understanding English fluently.',
          },
          {
            text: 'Pathway to Better Opportunities',
            description:
              'Proficiency in English enhances academic performance, job prospects, and global exposure, creating a foundation for long-term success.',
          },
        ],

        image: '/assets/images/what-we-do/education/english.jpg',
      },
      {
        title: 'Empowering Lives Through Basic Literacy',
        description:
          'Education is a fundamental right, yet many individuals have never had the opportunity to attend school. Our literacy programs aim to bridge this gap by equipping them with essential reading and writing skills for a self-reliant future.',
        image: '/assets/images/what-we-do/education/letracy.jpg',

        bulletPoints: [
          {
            text: 'Foundational Learning',
            description:
              'We provide structured literacy classes for individuals of all ages, helping them master basic reading, writing, and comprehension skills.',
          },
          {
            text: 'Practical Application',
            description:
              'Our programs focus on real-world literacy, enabling individuals to read signs, fill out forms, and communicate effectively.',
          },
          {
            text: 'Path to Independence',
            description:
              'Literacy empowers individuals, giving them confidence, dignity, and the ability to contribute meaningfully to their communities.',
          },
        ],
      },
    ],

    sub_tagline: 'Join the Mission',
    sub_title: 'Give the Gift of Education',
    quote:
      'Education is the bridge from poverty to opportunity, empowering minds, transforming futures, and breaking the cycle for generations to come.',

    video: '',

    gallary: [
      '/assets/images/what-we-do/education/support.jpg',
      '/assets/images/what-we-do/education/english.jpg',
      '/assets/images/what-we-do/education/letracy.jpg',
    ],
  },
  'skills-training': {
    id: 'skills-training',
    title: 'Skills Training',
    tagline: 'Empowering Livelihoods, Transforming Futures',
    image: '/assets/images/what-we-do/skill/Banner/Skills Training Banner.png',

    description:
      'Lack of skills and employment opportunities keeps many trapped in poverty. At Nizamia Charitable Trust, we provide vocational training programs that equip individuals with practical skills, empowering them to earn a sustainable livelihood and uplift their families.',
    programs: [
      {
        title: 'Mobile Repairing: Empowering Youth with Technical Skills',
        description:
          'Equipping young individuals with practical skills in mobile phone repairs, helping them secure stable jobs or establish their own businesses.',
        image:
          '/assets/images/what-we-do/skill/Card Images/Mobile Repairing.png',

        bulletPoints: [
          {
            text: 'Hands-on Technical Training',
            description:
              'Comprehensive courses covering mobile diagnostics, hardware, and software repairs to develop job-ready expertise.',
          },
          {
            text: 'Employment & Entrepreneurship Opportunities',
            description:
              'Empowering individuals to work in service centers, start independent repair businesses, or freelance for financial stability.',
          },
          {
            text: 'Future-Ready Skill Development',
            description:
              'Providing industry-relevant knowledge and hands-on experience to keep up with the evolving mobile technology landscape.',
          },
        ],
      },
      {
        title: 'Empowering Through Computer Training',
        description:
          'Closing the digital gap by providing essential IT skills, empowering individuals with technology-driven education, & enhancing employability for a brighter future.',
        image:
          '/assets/images/what-we-do/skill/Card Images/Computer Training.png',

        bulletPoints: [
          {
            text: 'IT Literacy for All',
            description:
              'We offer foundational and advanced computer courses, ensuring individuals gain essential digital skills to thrive in today’s job market.',
          },

          {
            text: 'Enhanced Employability',
            description:
              'From basic computing to specialized software training, our programs equip learners with in-demand skills, increasing their career prospects.',
          },
          {
            text: 'Future-Ready Workforce',
            description:
              'By integrating technology-driven education, we prepare individuals for the evolving digital economy, enabling them to secure stable employment or start their own ventures.',
          },
        ],
      },
      {
        title: 'Empowering Women Through Tailoring & Embroidery',
        description:
          'Empowering individuals with practical skills to achieve financial independence, break the cycle of poverty, and build a self-reliant future for themselves & their families.',
        image:
          '/assets/images/what-we-do/skill/Card Images/Tailoring & Embroidery.png',

        bulletPoints: [
          {
            text: 'Hands-On Sewing & Embroidery Training',
            description:
              'We equip women with professional tailoring and embroidery skills, enabling them to create high-quality garments and handcrafted products.',
          },

          {
            text: 'Pathway to Financial Independence',
            description:
              " Through skill-building, women gain the confidence to start home-based businesses, secure employment, and contribute to their family's income.",
          },
          {
            text: 'Creating a Supportive Community',
            description:
              ' Our training fosters a network of empowered women who support each other, share knowledge, and work towards economic stability together.',
          },
        ],
      },
    ],
    video: '/assets/images/what-we-do/skill/skill.mp4',
    video_story:
      'We’ve been offering free stitching classes to underprivileged women, empowering them with skills. Today, many of them are stitching clothes & earning a livelihood with dignity.',
    video_tagline:
      'By providing individuals with the tools to succeed, we empower them to break free from poverty and build a brighter future for themselves and their communities. Support skill training today and be a part of this change!',

    sub_tagline: 'Join the Mission',
    sub_title: 'Transforming Lives, One Skill at a Time',

    gallary: [
      '/assets/images/what-we-do/skill/5 Images/1.png',
      '/assets/images/what-we-do/skill/5 Images/2.png',

      '/assets/images/what-we-do/skill/5 Images/3.png',

      '/assets/images/what-we-do/skill/5 Images/4.png',

      '/assets/images/what-we-do/skill/5 Images/5.png',
    ],

    quote:
      'Empower through skills, transform lives. Training today creates opportunities tomorrow, fostering independence, confidence, and a brighter future for all.',
  },
  'women-empowerment': {
    id: 'women-empowerment',
    title: 'Women Empowerment',
    tagline: 'Strengthening Communities Through Women',
    image:
      '/assets/images/what-we-do/empowerment/Banner/Women Empowerment Banner.png',

    description:
      'Women are the foundation of society, yet many lack access to education, financial independence, and essential healthcare. At Nizamia Charitable Trust, we believe that empowering women leads to stronger families, resilient communities, and a brighter future.',
    programs: [
      {
        title: 'Empowering Women Through Skill Development',
        description:
          'Empowering women through skills training creates lasting change, fostering independence, confidence, and economic growth. Support skill-building programs and transform lives.',
        image:
          '/assets/images/what-we-do/empowerment/Card Images/Skills Training.png',

        bulletPoints: [
          {
            text: 'Vocational Training',
            description:
              ' Women receive hands-on training in tailoring, embroidery, and craft-making, equipping them with valuable skills for sustainable income.',
          },
          {
            text: 'Small Business Development',
            description:
              'We provide guidance on entrepreneurship, helping women start home-based businesses and manage finances for long-term success',
          },
          {
            text: 'Economic Empowerment',
            description:
              'By gaining skills and financial literacy, women become self-reliant, enabling them to support their families and contribute to their communities.',
          },
        ],
      },

      {
        title: 'Empowering Women Through Entrepreneurship',
        description:
          'Every woman holds the potential to lead, inspire, and build. We nurture that spirit through skills, mentorship, and unwavering support — helping women shape stronger, brighter futures.',
        image:
          '/assets/images/what-we-do/empowerment/Card Images/Health & Rights Awareness.png',

        bulletPoints: [
          {
            text: 'Home-Based Business Support',
            description:
              'We walk with women as they step into entrepreneurship, offering guidance and market insights to help their dreams take root.',
          },

          {
            text: 'Entrepreneurial Training',
            description:
              'Through mentorship and workshops, women learn to navigate business challenges with courage and skill',
          },

          {
            text: 'Confidence Building',
            description:
              'We believe in every woman’s ability to lead  and we help her believe it too.',
          },
        ],
      },
      {
        title: 'Empowering Women Through Knowledge',
        description:
          'Knowledge gives women the power to stand tall, to protect their families, and to chase their dreams with strength and certainty.',
        image:
          '/assets/images/what-we-do/empowerment/Card Images/Financial Independence Programs.png',

        bulletPoints: [
          {
            text: 'Health Awareness',
            description:
              'Information that empowers women to make choices for their well-being and that of their loved ones.',
          },
          {
            text: 'Legal Rights Education',
            description:
              'Workshops that light the path to justice, safety, and self-respect.',
          },
          {
            text: 'Personal Development',
            description:
              'Programs that build the self-esteem and leadership skills every woman deserves.',
          },
        ],
      },
    ],
    video: '/assets/images/what-we-do/empowerment/skill.mp4',
    video_story:
      'We provide free sewing machine classes to underprivileged women, empowering them to stitch clothes and earn a livelihood, fostering independence and financial stability.',
    video_tagline:
      'When women have access to skills, resources, and opportunities, they transform their lives and those around them. By supporting women’s empowerment, you help create financial independence, stronger families, and thriving communities. Invest in women today and be a part of this change!',

    gallary: [
      '/public/assets/images/what-we-do/empowerment/5 Images/1.png',
      '/public/assets/images/what-we-do/empowerment/5 Images/2.png',
      '/public/assets/images/what-we-do/empowerment/5 Images/3.png',
      '/public/assets/images/what-we-do/empowerment/5 Images/4.png',
      '/public/assets/images/what-we-do/empowerment/5 Images/5.png',
    ],

    quote:
      'Empower a woman, uplift a community. When women thrive, families flourish, and societies grow stronger. Invest in her, change the world.',

    sub_tagline: 'Join the Mission',
    sub_title: 'Empowering Women, Uplifting Communities',
  },
  'emergency-relief': {
    id: 'emergency-relief',
    title: 'Emergency & Seasonal Relief',
    tagline: 'Emergency & Seasonal Relief: Protecting the Most Vulnerable',
    image:
      '/assets/images/what-we-do/seasonal/Banner/Emergency & Seasonal Relief Banner.png',
    description:
      'Extreme weather and unforeseen disasters can leave countless individuals struggling for survival. At Nizamia Charitable Trust, we respond swiftly to provide essential aid, ensuring no one suffers due to circumstances beyond their control.',
    programs: [
      {
        title: 'Bringing Warmth & Relief in Harsh Winters',
        description:
          'Shielding those in need from harsh winter conditions by providing warm clothing, blankets, hot meals, and essential support to ensure safety and comfort.',
        image:
          '/assets/images/what-we-do/seasonal/Card Images/Winter Essentials.png',

        bulletPoints: [
          {
            text: 'Blanket & Clothing Distribution',
            description:
              'We provide warm blankets, jackets, and essential winter clothing to shield individuals and families from the bitter cold.',
          },
          {
            text: 'Hot Meal Programs',
            description:
              'Nutritious, freshly prepared hot meals are distributed to ensure no one goes hungry while battling extreme winter temperatures.',
          },
          {
            text: 'Shelter & Support',
            description:
              'Our relief efforts extend to offering temporary shelters, heating solutions, and necessary resources to those struggling to survive freezing conditions.',
          },
        ],
      },
      {
        title: 'Beating the Heat: Summer Relief Efforts',
        description:
          'Delivering vital support to shield communities from extreme heat through hydration, cooling solutions, and nutritional aid, ensuring safety and comfort during harsh summer conditions.',
        image: '/assets/images/what-we-do/seasonal/Card Images/Summer Aid.png',

        bulletPoints: [
          {
            text: 'Hydration Support',
            description:
              'We set up drinking water stations in high-risk areas, ensuring access to clean and safe water for all.',
          },
          {
            text: 'Cooling Solutions',
            description:
              ' We distribute fans, umbrellas, and cooling kits to help individuals, especially the elderly and children, cope with scorching temperatures.',
          },
          {
            text: 'Nutritional Assistance',
            description:
              'We provide hydrating fruits, electrolyte drinks, and light meals to prevent dehydration and heat-related illnesses in vulnerable communities.',
          },
        ],
      },
      {
        title: 'Emergency Response for Crisis Situations',
        description:
          'Delivering swift aid to communities affected by disasters and crises, ensuring access to food, shelter, medical care, and long-term recovery support for those in need.',
        image:
          '/assets/images/what-we-do/seasonal/Card Images/Emergency Response.png',

        bulletPoints: [
          {
            text: 'Immediate Aid Distribution',
            description:
              'We swiftly provide food, clean water, and emergency shelter to those impacted by natural disasters, conflicts, and humanitarian crises.',
          },

          {
            text: 'Medical Assistance',
            description:
              'Our teams ensure access to essential healthcare, offering first aid, medical supplies, and support to prevent disease outbreaks in affected areas.',
          },
          {
            text: 'Long-Term Recovery Support',
            description:
              ' Beyond immediate relief, we assist in rebuilding efforts, helping communities regain stability with sustainable resources and rehabilitation programs.',
          },
        ],
      },
    ],
    video: '/assets/images/what-we-do/seasonal/winter.mp4',
    video_story:
      'We have been distributing woolen clothes; shawls, socks, blankets, and more to homeless people across Delhi-NCR, helping them stay warm and comfortable during colder months.',
    video_tagline:
      'When disasters strike or extreme weather hits, vulnerable communities suffer the most. By supporting emergency and seasonal relief, you help provide warmth, shelter, and essential aid. Stand with those in need—bring comfort, safety, and hope today!',
    gallary: [
      '/assets/images/what-we-do/seasonal/5 Images/1.png',
      '/assets/images/what-we-do/seasonal/5 Images/2.png',
      '/assets/images/what-we-do/seasonal/5 Images/3.png',
      '/assets/images/what-we-do/seasonal/5 Images/4.png',
      '/assets/images/what-we-do/seasonal/5 Images/5.png',
    ],

    sub_tagline: 'Join the Mission',
    sub_title: 'Providing Relief, Protecting Lives',
    quote:
      'Providing warmth in winter, relief in disasters, and hope in crisis—because no one should suffer due to circumstances beyond their control.',
  },
  'water-accessibility': {
    id: 'water-accessibility',
    title: 'Water Accessibility',
    tagline: 'Bringing Clean Water to Every Community',
    image: '/assets/images/what-we-do/water/Banner/Water Accessibility.png',

    description:
      'Clean water is essential for survival, yet millions lack access to it. Contaminated water leads to disease, suffering, and hardship. Our water accessibility initiatives are dedicated to ensuring that safe drinking water reaches those who need it most.',
    programs: [
      {
        title: 'Cold Drinking Water Plants: Ensuring Clean Water for All',
        description:
          'Providing sustainable drinking water solutions in water-scarce regions to ensure continuous access to clean, safe, and purified water for communities in need.',
        image:
          '/assets/images/what-we-do/water/Card Images/Cold Drinking Water Plants.png',

        bulletPoints: [
          {
            text: 'Purified Water Supply',
            description:
              'We establish cold drinking water plants in areas facing water shortages, ensuring a steady source of clean, safe water.',
          },
          {
            text: 'Sustainable Water Systems',
            description:
              'These plants use advanced filtration and purification technologies to provide long-term access to fresh drinking water.',
          },
          {
            text: 'Community Impact',
            description:
              'By reducing reliance on unsafe water sources, we improve public health, prevent waterborne diseases, and enhance overall well-being.',
          },
        ],
      },
      // {
      //   title: 'Community Wells: Sustaining Communities with Fresh Water',
      //   description:
      //     'Access to clean water is vital for health, hygiene, and daily life. Our community well projects ensure sustainable water sources for underserved areas.',
      //   image:
      //     '/assets/images/what-we-do/water/Card Images/Community Wells.png',

      //   bulletPoints: [
      //     {
      //       text: 'Reliable Water Supply',
      //       description:
      //         'Constructing deep wells to provide continuous access to fresh, clean water for entire neighborhoods, reducing reliance on unsafe water sources.',
      //     },
      //     {
      //       text: 'Improved Health & Hygiene',
      //       description:
      //         'Safe drinking water helps prevent waterborne diseases and promotes better sanitation practices, leading to healthier communities.',
      //     },
      //     {
      //       text: 'Empowering Local Communities',
      //       description:
      //         ' Establishing wells reduces the burden on women and children who travel long distances for water, improving their quality of life.',
      //     },
      //   ],
      // },
      {
        title: 'Public Water Coolers: Cooling Communities with Clean Water',
        description:
          'Ensuring free access to clean drinking water in public spaces, promoting health, preventing dehydration, and offering relief during extreme heat for community well-being.',
        image:
          '/assets/images/what-we-do/water/Card Images/Public Water Coolers.png',

        bulletPoints: [
          {
            text: 'Hydration Stations',
            description:
              'We install public water coolers in high-traffic areas, ensuring everyone has access to clean and refreshing drinking water.',
          },

          {
            text: 'Relief During Extreme Heat',
            description:
              ' Our water stations help prevent dehydration and heat-related illnesses, offering much-needed relief during scorching summer months.',
          },
          {
            text: 'Accessible to All',
            description:
              "Whether it's commuters, daily wage workers, or the elderly, our water coolers provide free and easy access to safe drinking water.",
          },
        ],
      },
    ],
    video: '/assets/images/what-we-do/water/water.mp4',

    video_tagline:
      'Access to safe water is a fundamental right that empowers communities and improves lives. Clean water prevents disease, enhances well-being, and supports livelihoods. By ensuring water accessibility, we create healthier families and stronger communities. Support our mission—bring safe water to those in need!',

    gallary: [
      '/assets/images/what-we-do/water/5 Images/1.png',
      '/assets/images/what-we-do/water/5 Images/2.png',

      '/assets/images/what-we-do/water/5 Images/3.png',

      '/assets/images/what-we-do/water/5 Images/4.png',

      '/assets/images/what-we-do/water/5 Images/5.png',
    ],

    quote:
      'Clean water is life’s most essential need. Every drop counts in building healthier communities and a better future for all.',

    sub_title: 'Bringing Clean Water, Transforming Lives',
    sub_tagline: 'Join the Mission',
  },
};
