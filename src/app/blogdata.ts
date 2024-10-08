import digital from "../../public/Digital-Skills.jpg";
import cybersecurity from "../../public/cybersecurity.jpg";
import internet from "../../public/internet.avif";
import helmet from "../../public/helmet.avif";
import tax from "../../public/tax.jpg.avif";
import gemini from "../../public/Gemini-Live.jpg.avif";
import attendanceMonitor from "../../public/punjab schools.avif";
import court from "../../public/court-.jpg.avif";
import connection from "../../public/no-internet.jpg";
import cyberknife from "../../public/CyberKnife-tech.avif";


export interface Blog {
  title: string;
  slug: string;
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  description1: string;
  description2: string;
  description3: string;
  author: string;
  createdAt: string;
  time: string;
}

export const blogs: Blog[] = [
  {
    id: "1",
    title:
      "KP and Google to Give Digital Skills Scholarships to Thousands of Youngsters",
    image: digital,
    slug: "blog-5",
    description1:
      "In a significant step toward building a digitally empowered and economically resilient Khyber Pakhtunkhwa, the Khyber Pakhtunkhwa Information Technology Board (KPITB), under the leadership of the Honorable Chief Minister Mr. Ali Amin Khan Gandapur, has unveiled a series of groundbreaking initiatives.",
    description2:
      "The KPITB has launched its Digital Internship Program, offering 200 internship opportunities to young graduates to train them in industry-demanded skills. These interns will be placed in IT companies located in IT parks in Peshawar and Abbottabad, enabling them to gain practical experience and increase employability. The initiative was launched under the direction of Chief Minister Ali Amin Khan Gandapur.",
    description3:
      "The new Join IT online portal was introduced to connect skilled individuals with IT companies seeking technical expertise. The platform will act as a talent demand-supply bridge, allowing organizations to find the skilled workforce they need while providing employment opportunities to local talent. This initiative was also launched by the Chief Minister.",
    author: "By Arsalan Khattak",
    createdAt: " Published Sep 14, 2024 ",
    time: "12:10 am",
  },
  {
    id: "2",
    title: "Pakistan Achieves Top Score in Cybersecurity Index 2024 Report",
    image: cybersecurity,
    slug: "blog-6",
    description1:
      "Pakistan has achieved the top score in the International Telecommunication Union’s (ITU) Global Cybersecurity Index 2024 report. The report ranks hundreds of countries across different continents according to their cybersecurity status and Pakistan was ranked among the top-tier performers.",
    description2:
      "The report divides these countries into tiers, indicating their cybersecurity performance scores. Those with the highest scores reach the highest tier (Tier 1) while those with the lowest fall under Tier 5. The score takes into account several factors such as a country’s legal measures, technical measures, organization measures, capacity development, and cooperation measures.  Here are all the tiers:",
    description3:
      "Pakistan was ranked in the highest tier (role modeling) with a score as high as 95-100. Other countries on this list were Australia, Germany, the United States, Bahrain, Italy, Oman, and many others. This means that Pakistan is regarded as a role model when it comes to cybersecurity measures.",
    author: "By Aasil Ahmed",
    createdAt: " Published Sep 14, 2024 ",
    time: "12:28 pm",
  },
  {
    id: "3",
    title:
      "Internet, Mobile Traffic, ATMs At Risk of Shutting Down Across Pakistan",
    image: internet,
    slug: "blog-7",
    description1:
      "Around 50 percent of mobile traffic, 10 percent of Internet traffic, and around 40 percent of ATM banking machines are at risk of out of service, due to non-renewal of Long Distance International (LDI) licenses on account of outstanding dues of around Rs. 79 billion, official documents revealed.There were 13 LDI Licensees up for renewal. Four licenses are processed for renewal, and the remaining 9 licensees have outstanding dues regarding APC for USF.",
    description2:
      "Pakistan has several cross-border microwaves and OFC links with neighboring countries like Afghanistan, facilitated by Multinet Pakistan which enhance international connectivity.Non-renewal will lead to the discontinuity of the international data transit, potentially causing connectivity issues for operators in Afghanistan that rely on these routes.",
    description3:
      "Pakistan has several cross-border microwaves and OFC links with neighboring countries like Afghanistan, facilitated by Multinet Pakistan which enhance international connectivity.Non-renewal will lead to the discontinuity of the International data transit, potentially causing connectivity issues for operators in Afghanistan.",
    author: "By Arsalan Khattak",
    createdAt: " Published Sep 10, 2024",
    time: "11:01 am",
  },
  {
    id: "4",
    title: "Lahore Cracks Down on Helmetless Motorcyclists",
    image: helmet,
    slug: "blog-8",
    description1:
      "motorcyclists riding without helmetsIn Lahore, a strict operation has begun to target motorcyclists riding without helmets and licenses at the main entry and exit points.Authorities have stationed personnel at several key locations, including Ravi Bridge, Saggian, Thokar Niaz Baig, Babu Sabu, Ada Plot, Nawaz Sharif Interchange, and 10 additional spots such as Harbanspura, Gajjumata, and Bhatta Chowk.",
    description2:
      "For now, motorcyclists without helmets will be allowed to enter the city after being fined. However, starting next week, those without helmets will be barred from entering the city. Additionally, authorities plan to act against rickshaws and public transport vehicles using LPG cylinders.In another development, Lahore’s Chief Traffic Officer, Amara Athar, has initiated a similar campaign targeting motorcyclists without valid driving licenses. Offenders will be fined Rs. 2,000, and their motorcycles will be seized until they provide a valid license.",
    description3:
      "The CTO emphasized that obtaining a license costs Rs. 930 and encouraged citizens to comply with the law. Furthermore, the 42-day validity for learner permits has been abolished, meaning motorcyclists must secure a full license before using public roads.To assist the public, 10 driving license testing centers have been established across the city, and over 500,000 residents have already benefited from these services this year.",
    author: "By Saqib Rehman",
    createdAt: " Published Sep 14, 2024 ",
    time: "12:51 pm",
  },
  {
    id: "5",
    title: "Govt Mulls Giving Tier-2 Merchants a 5-Year Tax Break",
    image: tax,
    slug: "blog-9",
    description1:
      "The federal government is considering allowing tier-2 merchants a tax break of at least 5 years.Sources said that this was discussed in a meeting chaired by the State Minister for Finance and Revenue and officials of the Ministry of Finance. The State Bank of Pakistan, the Ministry of Information Technology, and the Federal Board of Revenue also participated in the meeting.",
    description2:
      "Sources informed ProPakistani that the government can also introduce a phased tax exemption plan, where the tax break is reduced gradually over five years, allowing merchants to adjust to the new system progressively.The meeting also discussed that the government should move towards zero pricing on Raast Person to Merchant (P2M) transactions for receiving merchants.A key initiative in this direction is to enhance the capabilities of financial institutions to leverage merchant transaction data, thereby enabling their entry into the data-based lending business.",
    description3:
      "Regulatory and policy efforts towards establishing robust data protection and data-sharing protocols must be initiated, sources added.The State Bank officials informed that about 84% of the transactions in Pakistan are still over the counter, which should be enforced to be converted into account-based or wallet-based payments.The central bank also proposed that government departments should start collecting digital payment methods by removing alternatives like over-the-counter payments.",
    author: "By Arsalan Khattak",
    createdAt: " Published Sep 6, 2024 ",
    time: "1:16 pm",
  },
  {
    id: "6",
    title:
      "Google Makes Gemini Live Free for Everyone, Coming to Android Devices",
    image: gemini,
    slug: "blog-10",
    description1:
      "Google has announced a significant expansion of its Gemini Live service, a feature that enables real-time conversations with the company’s AI assistant. Initially exclusive to Advanced subscribers, this interactive tool will now be available to all users for free.Gemini Live distinguishes itself from the standard Gemini app by offering a more dynamic conversational experience. Users can engage in fluid back-and-forth exchanges, with the ability to interrupt and redirect the conversation as needed. This flexibility allows for new information or changes in direction mid-dialogue.",
    description2:
      "Currently, access to Gemini Live is limited to Android users through the Gemini app, which is exclusively available on the Google Play Store. The rollout is further restricted to devices set to English language settings, though Google has indicated that support for additional languages is in development and will be introduced soon.",
    description3:
      "Google’s Gemini Live feature can be easily accessed through the Gemini app on Android devices. Users can initiate a live conversation by tapping the sparkle icon located in the bottom-right corner of the app. Once activated, the screen displays two primary controls: a “Hold” button and an “End” button, allowing users to manage the flow of their conversation with the AI.Upon ending the chat, users can review a complete transcription of their interaction. This feature provides a useful record of the conversation for future reference. It’s worth noting that, in its current iteration, Gemini Live does not integrate with other Google services such as Gmail, YouTube Music, or Maps. This limitation sets it apart from some of the company’s other AI-powered tools.",
    author: "By Aasil Ahmed",
    createdAt: " Published Sep 10, 2024 ",
    time: "4:07 pm",
  },
  {
    id: "7",
    title: "Punjab Introduces Attendance Monitoring System for Teachers",
    image: attendanceMonitor,
    slug: "blog-11",
    description1:
      "The Punjab School Education Department (SED) introduced a new monitoring system on Friday to ensure teacher attendance in public schools, aiming to improve the overall quality of education across the province.This system focuses on strict compliance with working hours for principals and teachers as part of a broader initiative to enhance educational standards and maintain school discipline.",
    description2:
      "According to a directive obtained by Dawn, the SED has instructed all school staff to adhere to specified duty hours, with surprise inspections by department officers to ensure compliance. The guidelines, issued on August 11, emphasize that principals and teachers must stay in school until 2:30 pm. The department has reinforced school timing regulations to improve operations and ensure educational activities run smoothly.",
    description3:
      "The SED has communicated these instructions to all District Education Authorities (DEAs) chief executive officers in Punjab, stressing the importance of adhering to the previously issued schedule.Teachers are now required to prepare lesson plans, engage in professional development, and participate in academic and extracurricular activities during extended school hours and alternate Saturdays. The department warned that no leniency would be tolerated, and officers are responsible for ensuring full compliance.",
    author: "By Raji Shoaib",
    createdAt: " Published Sep 14, 2024 ",
    time: "1:55 pm",
  },
  {
    id: "8",
    title: "Punjab Govt Reverses Decision to Increase Court Fees",
    image: court,
    slug: "blog-12",
    description1:
      "The Punjab government has rolled back its decision to increase court fees, offering relief to the public. On Saturday, a new notification was issued, reducing the fees following approval from the provincial governor.The court fee, which had been raised significantly, was brought down from Rs. 500 to just Rs. 10. Earlier, under the Punjab Finance Act 2024, the government had increased court fees and stamp duties by a large margin.",
    description2:
      "The hike affected various court processes, with fees rising by 500% to 1000% in some cases. For instance, the cost of court tickets for civil and criminal cases had jumped from Rs. 2 to Rs. 500, while transferring cases saw an increase from Rs. 5 to Rs. 500.Requests for court records, previously Rs. 2, had also been raised to Rs. 500, making it difficult for many litigants. Filing a memorandum of appeal or supervision had seen a similar increase, from Rs. 15 to Rs. 500.",
    description3:
      "The rollback has been welcomed by many, as it eases the financial burden on those seeking justice. Legal professionals and the general public expressed concerns over the steep hike, and the reduction offers a much-needed relief for litigants across the province.",
    author: "By Arsalan Khattak",
    createdAt: " Published Sep 14, 2024 ",
    time: "12:04 pm",
  },
  {
    id: "9",
    title:
      "Pakistan’s Internet Shutdowns Caused Business Losses of Over Rs. 1.3 Billion",
    image: connection,
    slug: "blog-13",
    description1:
      "In developing nations like Pakistan, internet connectivity is crucial in modernizing public services through digital public infrastructure (DPI) and enabling businesses to compete in the global marketplace. However, recent actions suggest Pakistan may be regressing in its digital transformation efforts. A notable internet shutdown in August 2023 reportedly cost e-commerce businesses 30% of their revenue.",
    description2:
      "Experts argue that for Pakistan to realize its potential as a thriving digital economy, the government must prioritize widespread, affordable internet access and invest in robust digital infrastructure. The current trend of internet shutdowns is counterproductive and risks stifling the country’s economic growth in an increasingly digital world.Speaking of limited internet access, recent data reveals that over 58% of Pakistan’s population has access to mobile internet networks but has not yet subscribed to these services.",
    description3:
      "This substantial gap between availability and adoption highlights a potential growth area for the telecom sector. Industry experts suggest that telecom providers could tap into this large pool of potential subscribers by improving affordability and enhancing service quality. Such expansion could boost the sector’s revenues and contribute to Pakistan’s broader digital transformation goals.",
    author: "By Arsalan Khattak",
    createdAt: " Published Sep 6, 2024 ",
    time: "11:03 am",
  },
  {
    id: "10",
    title: "JPMC Karachi is Giving Free Cancer Treatment Using CyberKnife",
    image: cyberknife,
    slug: "blog-14",
    description1:
      "The Jinnah Postgraduate Medical Centre (JPMC) in Karachi is providing free cancer treatment using the advanced CyberKnife technology, offering hope to patients nationwide.CyberKnife is a cutting-edge, non-invasive method that targets cancerous tumors with precise radiation, eliminating the need for surgery or anesthesia.",
    description2:
      "According to Dr. Tariq Mehmood, head of the Oncology Department at JPMC, this treatment significantly reduces side effects by minimizing damage to surrounding healthy tissues. Patients experience no pain during the procedure, and sessions typically range from 1 to 5 treatments.CyberKnife is versatile and can be used to treat various types of cancer, including those affecting the brain, spine, lungs, liver, and kidneys. It also serves as an alternative for patients with inoperable tumors or those requiring complex surgical interventions.",
    description3:
      "The system uses robotic technology to deliver high-energy radiation from multiple angles, focusing only on the tumor while sparing healthy tissues. This innovative approach has been proven effective in cancer treatment for over two decades.JPMC is the only hospital in the world offering this expensive treatment for free, benefiting patients from across Pakistan and 15 other countries. This initiative provides a life-saving option for many who otherwise could not afford such advanced care.",
    author: "By Arsalan Khattak",
    createdAt: " Published Sep 6, 2024 ",
    time: "4:36 pm",
  },
];
