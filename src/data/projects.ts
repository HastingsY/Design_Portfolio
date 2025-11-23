import MSUlogo from "../assets/MSUlogo.jpg";
import cookingTime from "../assets/cooking.png";
import PIQUE from "../assets/PIQUE_logo.png";
import LL from "../assets/LLsite.jpg";
import ESS from "../assets/ESS_logo.png";

// cooking time images
import empathy1 from "../assets/empathy 1.png";
import empathy2 from "../assets/empathy 2.png";
import empathy3 from "../assets/empathy map 3.png";
import empathy4 from "../assets/empathy map 4.png";
import empthay5 from "../assets/empathy map 5.png";
import persona1 from "../assets/Persona.png";
import persona from "../assets/Persona-2.png";
import businessModel from "../assets/business model.png";
import mindmap from "../assets/mind map 1.png";
import mindmap1 from "../assets/mind map 2.png";
import wireframe from "../assets/wireframe 1.png";
import wireframe1 from "../assets/wireframe 2.png";
import wireframe2 from "../assets/wireframe 3.png";
import wireframe3 from "../assets/wireframe 4.png";
import usabilityTest from "../assets/usability test plan dashboard.jpg";

// WebPIQUE Visualizer images
import activityDiagram from "../assets/activity diagram.jpg";
import activityDiagram1 from "../assets/activity diagram 2.jpg";
import activityDiagram2 from "../assets/activity diagram 3.jpg";
import Pwire from "../assets/PIQUE wireframe 1.png";
import Pwire2 from "../assets/PIQUE wireframe 2.png";
import Pwire3 from "../assets/PIQUE wireframe 4.png";
import single from "../assets/PIQUE single file 1.png";
import single1 from "../assets/PIQUE single file 2.png";
import single2 from "../assets/PIQUE single file.png";
import compare from "../assets/PIQUE compare.png";
import compare2 from "../assets/PIQUE compare 2.png";
import project from "../assets/PIQUE project 4.png";

// environmental dashboard
import LLmockup from "../assets/LLdashboard_mockup.png";
import LLfinal from "../assets/LLdashboard_final.png";

export interface ProjectPhase {
  title: string;
  content: string;
  images?: string[];
  imageCaption?: string;
  links?: { text: string; url: string }[];
}

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  year: string;
  duration: string;
  role: string;
  team: string;
  client?: {
    name: string;
    logo?: string;
    context?: string;
  };
  heroImage: string;
  shortDescription: string;
  problem: string;
  solution?: string;
  benefits?: string;
  challenges?: string;
  outcome?: {
    content: string;
    images?: string[];
    imageCaption?: string;
  };
  reflections?: string;
  tools: string[];
  stats?: { label: string; value: string }[];
  phases: {
    empathize: ProjectPhase;
    define: ProjectPhase;
    ideate: ProjectPhase;
    prototype: ProjectPhase;
    test: ProjectPhase;
  };
}

export const projects: ProjectData[] = [
  {
    id: "cooking-time",
    title: "Cooking Time",
    category: "Mobile App",
    year: "2025",
    duration: "3 months",
    role: "UI/UX Designer",
    team: "2 Designers",
    client: {
      name: "Montana State University",
      logo: MSUlogo,
      context:
        "This project was completed as a course project for the Montana State University Computer Science UI Design course.",
    },
    heroImage: cookingTime,
    shortDescription:
      "A mobile app that streamlines meal prep for busy professionals with AI recipe generation, health tracking, virtual cooking classes, and smart grocery integration.",
    problem:
      "Many people struggle with everyday cooking decisions: not knowing what to cook after a long day, how to plan meals in advance, or what to do with leftover ingredients. These challenges often lead to frustration, wasted food, and missed opportunities for healthier eating. For college students and working professionals with busy schedules and limited grocery store trips, it is important to find quick, accessible, and adaptable ingredient lists, recipes, and cooking guidance.",
    solution:
      "In a team setting, we designed a cooking application tailored to meet the needs of college students and young working professionals. The app provides recipe discovery and storage, grocery shopping assistance, AI-powered recipe generation, and health and fitness goal tracking. Users can also join virtual cooking classes to enhance their culinary skills.",
    benefits:
      "The app benefits working professionals by reducing time spent finding recipes, shopping, and prepping for meals. It helps users reduce food waste by suggesting recipes based on available ingredients, while supporting healthier eating through integrated health tracking and dietary preference settings.",
    reflections:
      "This work sharpened my approach to UI design: prioritizing choice reduction, clear hierarchy, and accessible controls for fast, low-friction tasks. Collaborating in a team helped me articulate trade-offs, defend design decisions with user evidence, and iterate prototypes based on testing feedback. A natural next step is moderated usability sessions to validate meal-plan flows and refine the grocery list handoff.",
    tools: [
      "Adobe Express",
      "MS Teams",
      "Discord",
      "Google Forms",
      "Draw.io",
      "Adobe XD",
      "Material Icons",
    ],
    phases: {
      empathize: {
        title: "Understanding User Needs",
        content:
          "To understand what users like and dislike about existing cooking apps, our team performed a market analysis and conducted 5 user interviews. The market analysis identified cooking app features that users found desirable as well as areas for improvement. Through user interviews, we learned what users do, think, say, and feel when using existing cooking apps. We generated empathy maps (Fig. 1) for each interview participant to identify key pain and gain points.\n\n**Key User Desires:**\n• AI-generated recipes that can be queried or modified to meet individual lifestyles and dietary needs\n• Integration of cooking videos as a secondary aid alongside step-by-step instructions and photos\n• Integrated shopping features that allow users to select recipe ingredients and send them to a grocery store for convenient pickup\n• Tools to reduce food waste and repurpose leftovers\n• Ability to track health and fitness goals based on selected recipes\n• Setting preferences for diet types and allergies\n• Saving, accessing, and customizing favorite recipes\n• Cohesive tools that align with user expectations (current tools are fragmented or inconsistent)\n\n**Key Pain Points:**\n• Recipe apps are cluttered with ads that interrupt cooking steps\n• AI provides inconsistent or unreliable responses\n• Difficulty finding previously used or saved recipes",
        images: [empathy1, empathy2, empathy3, empathy4, empthay5],
        imageCaption:
          "Fig. 1. Empathy maps created after our five user interviews showing what they do, think, say, and feel.",
      },
      define: {
        title: "Defining Target Users & Opportunities",
        content:
          "During this phase, we generated one primary persona (Fig. 2) simulating the behavior and characteristics of our key demographic: young working professionals between ages 25-34. Findings from the empathy phase identified this group as having limited time and energy due to long work or school hours. This demographic is proficient in technology and prefers tools that streamline their lives, such as quickly finding and tailoring recipes or sending grocery lists to their local store.\n\nWe also developed our business model canvas (Fig. 2), identifying customer segments, relationships, distribution channels, and value propositions. We outlined key activities the Cooking Time team would engage in, identified necessary resources and potential partners, and mapped cost sources and revenue streams.\n\n**Key Findings:**\n• A clear market opportunity exists for a new cooking app\n• The app must be tailored to tech-savvy young working professionals\n• Core pain points (such as excessive ads) must be addressed during design and development\n• The concept demonstrates financial viability\n• Users need an app that adapts to their lives, budgets, and goals",
        images: [persona, persona1, businessModel],
        imageCaption:
          "Fig. 2. Persona template and generated persona for Susan Boley, our fictional character representing our key demographic group. Also included here is our business model canvas to show the market feasibility of Cooking Time.",
      },
      ideate: {
        title: "Exploring Features & Solutions",
        content:
          "After identifying features that would benefit our demographic and confirming the market opportunity, our team created ideas for what Cooking Time could include. We used a Mind Map (Fig. 3) to sketch out our concepts and visualize how they connected to our product and each other.\n\nOur main branches stemming from Cooking Time fell into six categories:\n\n**Users:** Different user segments and their specific needs\n**Content:** Types of recipes, videos, and instructional materials to include\n**Assistance:** AI-powered features and tools to help users cook more efficiently\n**Engagement & Outreach:** Strategies to encourage app usage and partnerships to reduce ads and subscription costs\n**Goals:** Health, fitness, and dietary tracking capabilities\n**Incentives:** Rewards and motivation systems to encourage continued use\n\nFrom these main branches, we continued mapping out specific features, content types, assistance mechanisms, engagement strategies, partnership opportunities, goal-tracking options, and user incentive systems.",
        images: [mindmap, mindmap1],
        imageCaption:
          "Fig. 3. Whiteboard and computer generated mind map showing our idea createion from Cooking Time to all the features we consider for Cooking Time.",
      },
      prototype: {
        title: "Building Wireframes & High-Fidelity Prototypes",
        content:
          "We created low-fidelity wireframes (Fig. 4) to sketch initial concepts for the app. We discovered that multiple screens were needed to capture and communicate all the information users desired. These wireframes helped us generate initial design ideas for item placement, iconography, and content organization to provide effective and efficient user flow.\n\nFrom the low-fidelity wireframes, we developed high-fidelity prototypes in Adobe XD. We added micro-interactions and transitions to demonstrate how users would flow through the system—from the customizable bottom navigation pane to the hamburger menu with all available options to recipe and video cards. This ensured consistency with familiar mobile app patterns.\n\n**Key Design Decisions:**\n• Used standard Material Icons for immediate recognition\n• Implemented simple, clean layouts to reduce cognitive load\n• Created consistent navigation patterns familiar to mobile users\n• Designed for optimal user experience with minimal friction",
        images: [wireframe, wireframe1, wireframe2, wireframe3],
        imageCaption:
          "Fig. 4. Wireframes for ten screens with projected content for Cooking Time to illustrate our initial design concept.",
        links: [
          {
            text: "View Prototype Here",
            url: "https://xd.adobe.com/view/e740af88-b63b-4e38-95d5-d20c346ec112-b213/?fullscreen&hints=off",
          },
        ],
      },
      test: {
        title: "Testing & Validation",
        content:
          'Usability testing is scheduled as the next major step in evaluating the Cooking Time app (Fig. 5). This phase will validate whether the design supports intuitive navigation, efficient task completion, and positive user satisfaction using industry-standard methods and metrics.\n\n**Testing Approach**\n\nWe will conduct moderated online usability testing using MS Teams or Discord, allowing us to capture audio, screen interactions, and think-aloud commentary. Participants will interact with the high-fidelity Adobe XD prototype through a shared link.\n\nTo ensure high-quality early insights, we plan to recruit five participants ages 20+, a sample size aligned with Nielsen\'s recommendation for early-stage usability evaluation.\n\n**Task-Based Evaluation**\n\nParticipants will receive a 12-task scenario list via Google Forms. After completing each task, they will answer the Single Ease Question (SEQ) to measure perceived difficulty.\n\nUpon completing all tasks, participants will complete the System Usability Scale (SUS) questionnaire to assess overall usability, learnability, and satisfaction.\n\n**ISO/IEC 25022 Metrics**\n\nTo quantify effectiveness and efficiency, the research team will observe participants during task execution and record standardized measures defined in ISO/IEC 25022, including:\n\n• Task time and time efficiency\n\n• Number of unnecessary or repeated actions\n\n• Tasks completed successfully\n\n• Errors per task and error recovery\n\nThese metrics ensure the evaluation is both rigorous and comparable to recognized usability benchmarks.\n\n**Objectives of the Testing Phase**\n\nThis testing phase will allow us to:\n\n• Assess the clarity, learnability, and efficiency of user flows\n\n• Identify UI elements or interactions that cause confusion, errors, or delays\n\n• Evaluate whether the navigation structure is intuitive across the prototype\n\n• Gather qualitative and quantitative feedback on overall usability\n\n• Validate key design decisions before the next development cycle\n\n**Risks of Not Testing**\n\nFailure to conduct structured testing introduces significant risks, such as:\n\n• User frustration due to unclear flows or hard-to-find features\n\n• Misunderstanding or underuse of key app functionalities\n\n• Designing a product that does not meet user expectations or needs\n\n• Reduced engagement, increasing the likelihood that the app becomes "shelfware"\n\n**Key Questions We Aim to Answer**\n\n• Can users complete essential meal-planning and recipe-navigation tasks without assistance?\n\n• Where do users hesitate, experience cognitive friction, or get stuck?\n\n• Which features do users enjoy, undervalue, or want added?\n\n• Does the prototype feel intuitive, consistent, and accessible?\n\n**Testing Hypothesis**\n\nWe expect users to successfully understand the core flows—such as navigating recipes, planning meals, and switching tabs—but anticipate that the testing will reveal opportunities for refinement, particularly in clarity, accessibility, and navigation efficiency.',
        images: [usabilityTest],
        imageCaption:
          "Fig. 5. Our usability test plan dashboard to show our test flow.",
      },
    },
  },
  {
    id: "webpique-visualizer",
    title: "WebPIQUE Visualizer",
    category: "Web Application",
    year: "2025",
    duration: "7 months",
    role: "UI Designer & Developer",
    team: "1 Designer & Developer",
    client: {
      name: "Montana State University",
      logo: MSUlogo,
      context:
        "This project was funded through the Montana State University Software Engineering & Cyber Security Laboratory.",
    },
    heroImage: PIQUE,
    shortDescription:
      "A web-based visualizer developed for clients wanting to view complex PIQUE output JSON files. Designed to provide high-level information to inform stakeholders of software aspects resulting in low software quality.",
    problem:
      "PIQUE software quality assessment presents stakeholders with complex and lengthy JSON files containing information related to software quality. Currently, no visualizer exists for the PIQUE software quality model that provides item-specific details or comparison of files to inform stakeholders about software aspects that are hindering software quality.",
    solution:
      "I designed and developed a web-accessible visualizer that provides stakeholders with specific information related to their software that the PIQUE software quality model scores. The visualizer provides a streamlined experience for both developers and non-technical stakeholders. Its comparison view automatically highlights differing fields between files, while the score tracker displays changes across multiple versions to support long-term quality improvement.",
    benefits:
      "The visualizer provides software developers with the information they need to fix software vulnerabilities and improve software quality based on outputs generated by the PIQUE software quality model. Stakeholders gain insight into what aspects are hindering software quality and what actions they can take to improve their software quality.",
    outcome: {
      content:
        "The intermediate product (Fig. 3) provides both internal and external stakeholders with an intuitive visualizer to quickly see aspects of software quality. This provides stakeholders with insight on what aspects are hindering software quality and what actions they can take to improve their software quality. Note: This project is still ongoing and is not web accessible yet.",
      images: [single2, single, single1, compare, compare2, project],
      imageCaption:
        "Fig. 3. Screenshots of WebPIQUE Visualizer single file detail view, comparison of two files, and the project page showing scores over time with file render capability.",
    },
    reflections:
      "This project deepened my understanding of designing web-based visualizers that balance clarity for non-technical stakeholders with depth for engineers. Collaboration across teams improved my ability to translate feedback into concrete interaction patterns (e.g., comparison highlights and reset/filters), communicate design rationale, and iterate quickly within technical constraints. Next, I'd perform user testing and run a short task-based study to quantify time saved when identifying regressions across versions.",
    tools: [
      "Adobe XD",
      "React + Vite",
      "D3.js",
      "react-gauge-components",
      "Recharts",
      "Docusaurus",
    ],
    phases: {
      empathize: {
        title: "Understanding Stakeholder Needs",
        content:
          "To understand the goals and objectives of internal and external stakeholders, I conducted stakeholder meetings. This consisted of individual and group sessions to gather requirements of what each stakeholder wanted to display on the visualizer. Follow-up meetings were held to ensure evolving design decisions continued to meet stakeholder needs and to ask about additional features they wanted.\n\n**Key Stakeholder Desires:**\n• Drag-and-drop or file upload windows to upload files\n• Quickly visualize total software quality and quality aspect scores\n• View high-level information about each quality aspect in terms of product factors and findings from diagnostic tools\n• Compare scores and findings from two different JSON files to identify whether issues were resolved between versions or new issues were introduced that hinder software quality\n• Create a project structure to track total quality and quality aspect scores over time\n• Visualize findings per file or compare two files within the project structure\n• Automate the project structure to grab files from an external repository, while maintaining the capability of manually uploading files\n\n**Pain Points from Other PIQUE Visualizers:**\n• Cannot view refined details about what diagnostic findings are hindering software quality\n• Cannot view a comparison of files to see what is different or unique between the files",
      },
      define: {
        title: "Defining Scope & User Stories",
        content:
          "During this phase, I defined the scope of the visualizer, who the stakeholders are, and what the stakeholder needs are that were identified during the stakeholder meetings. I then generated user stories following standard software engineering concepts.\n\n**Scope:**\n\nThe scope of the WebPIQUE visualizer is to support stakeholders visualizing the WebPIQUE model TQI and its various quality aspects and product factors. The visualizer will display information on TQI and quality aspect scores, product factors (including CWEs), measures, diagnostic findings (including CVEs), and associated information providing package fix details. Quality aspect score details could include CWE information.\n\n**Stakeholders:**\n\nInternal members of the Montana State University Software Engineering and Cybersecurity Lab and external stakeholders.\n\n**Stakeholder Needs:**\n• Visualize WebPIQUE output to show total TQI and quality factor scores\n• Allow users to navigate to items that influence scores\n• Provide granular detail about the items influencing the score (violation rules)\n• Compare two files to visualize differences\n• Visualize TQI and quality aspect scores over time\n• Automate visualization process\n• Adaptable visualizer to display various PIQUE model formats",
      },
      ideate: {
        title: "User Stories & Activity Diagrams",
        content:
          "From these needs, user stories were generated to ground the design and development around the wants and the outcomes. This allowed me to brainstorm the user goals and how a visualizer would achieve their needs.\n\n**User Stories:**\n• As a web developer or MSU SECL member, I want to be able to upload a WebPIQUE output file, so that I can visualize the scores and findings of the output file\n• As a web developer or MSU SECL member, I want to view the TQI and Quality Aspect scores, so that I can determine the Quality Aspect producing a low TQI score\n• As a web developer or MSU SECL member, I want to be able to view the granular details (i.e., Product Factor CWE and related CVE) influencing Quality Aspect scores, so that I can make an informed decision on how to resolve a low TQI score\n• As a web developer or MSU SECL member, I want to view a side-by-side comparison of WebPIQUE outputs, so that I can view differences of what has been fixed or issues that were introduced\n• As a web developer or MSU SECL member, I want to be able to track the WebPIQUE TQI and quality aspect scores of at least 12 files\n• As a web developer or MSU SECL member, I want to automate the WebPIQUE Visualizer file selection\n• As a web developer or MSU SECL member, I want to automatically visualize one of the project files or compare two of the project's 12 files\n\nFrom these user stories, activity diagrams (Fig. 1) were generated to show the flow from user need to output.",
        images: [activityDiagram, activityDiagram1, activityDiagram2],
        imageCaption:
          "Fig. 1. Activity diagrams showing the flow between the user and the visualizer for the user stories outlined above.",
      },
      prototype: {
        title: "Wireframes & High-Fidelity Prototypes",
        content:
          "I created low-fidelity wireframes (Fig. 2) to sketch the initial concepts and layout to visualize PIQUE JSON files. This allowed me to start planning the user flow, from file upload to visualizing the refined details of scores and diagnostic findings for a single file, comparing two files, and creating a project structure to track scores over time.\n\nFrom the low-fidelity wireframes, I developed a high-fidelity prototype in Adobe XD. I added micro-interactions and transitions to demo the prototype for the main stakeholders. Both the low- and high-fidelity prototypes were reviewed with several internal and external stakeholders to ensure the design was meeting their expectations. All design elements and flows were reviewed. Additional design elements were added throughout the project.\n\n**Key Design Decisions:**\n• Consistent labeling and familiar interaction patterns with other web visualizers\n• Hover elements and clickable features to reduce interface clutter\n• User control and freedom when uploading files and navigating across pages and viewing file details\n• Legends, contextual labels, and badges on each page for clarity\n• Uniform tab patterns and filter controls",
        images: [Pwire, Pwire2, Pwire3],
        imageCaption:
          "Fig. 2. Low-fidelity wireframes showing initial design concept for the WebPIQUE Visualizer.",
        links: [
          {
            text: "View Prototype Here",
            url: "https://xd.adobe.com/view/1870bf09-5eb6-497a-b930-860a92633fb1-4d23/",
          },
        ],
      },
      test: {
        title: "Testing & Quality Evaluation",
        content:
          'The WebPIQUE Visualizer is still under active development; therefore, usability testing represents a critical upcoming phase to ensure the tool effectively supports researchers, developers, and decision-makers working with software quality data. The goal of this stage is to systematically evaluate the visualizer\'s usability and quality-in-use, using established international standards as the foundation for assessment.\n\n**Planned Usability Evaluation**\n\nI will conduct moderated and unmoderated evaluations with key stakeholders—including software engineers, researchers, and potential adopters—using metrics defined in ISO/IEC 25022 (Usability Measurement). These sessions will measure:\n\n• Effectiveness (accuracy and completeness of achieving tasks)\n\n• Efficiency (time and resources required to complete tasks)\n\n• Satisfaction (perceived usability and user confidence)\n\nTask scenarios will mirror real-world workflows, such as interpreting TQI scores, comparing CWE trends, navigating tab structures, and analyzing probability density visuals.\n\n**Quality-in-Use Evaluation**\n\nIn parallel, I will conduct a Quality-in-Use evaluation following ISO/IEC 25019, which focuses on how the visualizer performs in real operational contexts. This assessment will determine whether the visualizer:\n\n• Provides clear, actionable benefit\n\n• Reduces risk mitigation concerns\n\n• Supports decision-making across user roles\n\n• Is accepted and trusted by stakeholders\n\n• Aligns with broader organizational and research goals\n\nThis dual-framework evaluation ensures both traditional usability and higher-level quality-in-use outcomes are addressed.\n\n**Objectives of the Testing Phase**\n\nThe testing phase will enable us to:\n\n• Assess the clarity, learnability, and efficiency of user flows\n\n• Identify UI elements or interactions that generate confusion or interruptions\n\n• Evaluate whether the navigation structure is intuitive across complex data views\n\n• Gather user feedback on usability, clarity, and perceived value\n\n• Validate (or refine) our core design assumptions before final development cycles\n\n**Risks of Not Testing**\n\nFailing to conduct structured usability and QIU testing introduces significant risks, including:\n\n• User frustration due to low usability or unclear flows\n\n• Underutilized features or misinterpretation of data visualizations\n\n• Development of a tool that fails to meet user expectations\n\n• Reduced stakeholder trust, adoption, or engagement\n\n• Increased likelihood of the visualizer becoming "shelfware" due to avoidable usability barriers',
      },
    },
  },
  {
    id: "environmental-monitoring-dashboard",
    title: "Environmental Monitoring Dashboard",
    category: "Web Application",
    year: "2022",
    duration: "3 months",
    role: "UI Designer & Developer",
    team: "1 Designer & Developer",
    client: {
      name: "University of Utah SAGE Lab",
      logo: ESS,
      context:
        "This project was funded through the University of Utah's School of Environment, Society & Sustainability SAGE Laboratory.",
    },
    heroImage: LL,
    shortDescription:
      "A web-based dashboard developed to visualize hydrological and environmental data for the University of Utah's Landscape Lab. Designed to integrate scientific research and operational monitoring into an intuitive interface for researchers, planners, and citizen scientists.",
    problem:
      "In connection with my master's research, I collaborated with an interdisciplinary team of ecologists, hydrologists, city planners, and biogeochemists. The team needed a quick, accessible, and integrated solution to monitor and visualize environmental and economic data for a new landscape design facility at the University of Utah.",
    solution:
      "I designed and developed a web-accessible RShiny dashboard that integrates hydrological information, site maps and imagery, environmental chemistry data, and maintenance resource tracking. The dashboard allows users to interactively explore datasets, visualize spatial and temporal trends, and monitor site performance in real time.",
    benefits:
      "The dashboard provides research teams with data-driven insights to evaluate site performance and identify opportunities for design improvements. It also helps reduce resource usage and operational costs while supporting citizen scientists in monitoring ongoing environmental changes and stewardship outcomes.",
    outcome: {
      content:
        "The final product (Fig. 2) provides both internal and external stakeholders with an intuitive dashboard for viewing key landscape and stream site characteristics. Future development will extend functionality to allow additional researchers to link their datasets via the sidebar. Planned updates also include a reactive database connection for automatic updates of hydrographs, stream discharge, and chemistry data.",
      images: [LLfinal],
      imageCaption: "Fig. 2. Final working dashboard present to stakeholders.",
    },
    reflections:
      "This project strengthened my ability to design interfaces that serve diverse stakeholder needs, from researchers to facilities staff. I also expanded my frontend development skills beyond standard UI libraries by building custom visualizations and map interactions in RShiny.",
    tools: [
      "MS PowerPoint",
      "RShiny",
      "R (ggplot2, plotly)",
      "R leaflet",
      "R summarytools",
    ],
    phases: {
      empathize: {
        title: "Understanding Stakeholder Needs",
        content:
          "I conducted meetings with project leaders for a landscape design facility at the University of Utah to identify user needs and prioritize dashboard features. These discussions guided which environmental and facility data to include and how to structure the dashboard layout for optimal usability.\n\n**Key Stakeholder Desires:**\n\n• Report raw stream chemistry data, display figures, and provide summary statistics\n\n• Provide a map of the landscape facility with pictures of key site features\n\n• Provide hydrographs for stream and storm drains near the landscape facility\n\n• Display costs to maintain landscape before and after facility installation\n\n**Pain Points:**\n\n• No dashboards exist for this site\n\n• Need something web accessible for research teams and citizen scientists",
      },
      define: {
        title: "Defining the Problem & Scope",
        content:
          "In this phase, I translated the insights gathered during stakeholder interviews into a clear and focused problem statement. While users expressed interest in a wide range of environmental and hydrological data, I identified a common underlying challenge: the team lacked a centralized, accessible way to explore and compare datasets related to the site's ecological and economic performance.\n\n**Refined Problem Statement:**\n\nThe research team relied on raw spreadsheets, emailed PDFs, and standalone figures to understand chemical trends, hydrological patterns, and maintenance costs. These disconnected resources made it difficult to identify temporal changes, compare system performance before and after the facility's construction, or communicate emerging insights to citizen scientists and city decision-makers.\n\nA unified dashboard was needed—one that could integrate diverse environmental datasets, allow interactive exploration, and support both expert analysis and public-facing interpretation.\n\n**User Needs Clarified:**\n\n• Researchers (Ecologists, Hydrologists, Biogeochemists): Need access to raw data, statistical summaries, spatial context, and trend visualizations to support ongoing monitoring and analysis\n\n• City Planners & Designers: Need intuitive, high-level visuals to evaluate overall system performance, budget impacts, and opportunities for future design improvements\n\n• Citizen Scientists & Students: Need simplified, visual, map-based interactions that help them explore the site's environmental functions and understand broader sustainability outcomes\n\n**Defining the Scope:**\n\nI outlined the essential focus areas the dashboard must support in order to meet the synthesized needs:\n\n• Hydrology (stream flow, stormwater data, hydrographs)\n\n• Environmental chemistry (raw measurements, summary statistics, trend analysis)\n\n• Spatial exploration (interactive map, images of site features)\n\n• Economic tracking (maintenance costs before and after installation)\n\nThis definition established the boundaries of the dashboard and provided a foundation for structured ideation and feature exploration.",
      },
      ideate: {
        title: "Design Requirements & Principles",
        content:
          "With a clear problem definition and scope in place, I began exploring how the dashboard could best support these diverse user needs. This phase focused on translating insights into actionable structure, interface concepts, and design directions. I evaluated multiple approaches to layout, navigation, and interaction patterns to ensure the dashboard would serve both technical and non-technical audiences.\n\n**Design Requirements:**\n\nFunctional Requirements:\n\n• Integrate hydrology, chemistry, imagery, and cost data into a single interactive tool\n\n• Provide geospatial context through an interactive map with clickable site features\n\n• Offer dynamic controls (date filters, variable selectors, site toggles)\n\n• Display multiple visualization types (hydrographs, time series, boxplots, spatial overlays)\n\n• Allow seamless toggling between raw data tables and summarized insights\n\n• Enable users to download data for further analysis\n\nNon-Functional Requirements:\n\n• Browser-based and accessible without installation\n\n• Intuitive for users with varying levels of scientific and technical expertise\n\n• Built in a language the research team already uses (R) to ensure long-term maintainability\n\n• Efficient and responsive with large or irregular environmental datasets\n\n**Constraints and Considerations:**\n\n• Technical Constraint: RShiny was selected because the team already worked in R, reducing onboarding time and enabling future customization\n\n• Data Constraints: Environmental data arrived in batches, in varied formats, and with differing temporal resolutions. This required ideation around flexible data-wrangling workflows and robust error handling\n\n• User Diversity: Expert users needed granular data access, while community partners needed simplified visual storytelling. This informed the use of modular tabs and progressive disclosure\n\n**Core Design Principles:**\n\n• Clarity: Design visualizations that communicate environmental trends without overwhelming users\n\n• Traceability: Allow users to move from high-level summaries → detailed plots → raw data, maintaining transparency\n\n• Modularity: Structure the dashboard into intuitive sections (Map, Hydrology, Chemistry, Costs)\n\n• Approachability: Use clean design patterns, familiar interaction controls, and accessible color scales\n\n• Scientific Rigor: Ensure all data transformations and visualizations reflect accurate scientific methodology",
      },
      prototype: {
        title: "Low-Fidelity to Functional Prototype",
        content:
          "To translate early concepts into a tangible form for stakeholder feedback, I developed a rapid prototype using MS PowerPoint (Fig. 1). This low-fidelity approach allowed me to quickly iterate on layout, navigation, and content organization without the overhead of coding.\n\n**Low-Fidelity Sketching:**\n\nThe prototype explored several interaction and layout variations, including:\n\n• Tab-based vs. sidebar navigation to determine which structure best supported a multi-disciplinary audience\n\n• Split-screen layouts pairing raw data tables with visualizations to maintain scientific traceability\n\n• Map overlays and imagery integration, experimenting with ways to highlight site features and create intuitive spatial context\n\n• Options for visualizing pre- and post-installation maintenance costs, ensuring the dashboard communicated changes over time\n\nThis prototype allowed me to validate structural decisions early, before investing in full development. They also served as an accessible visual tool for facilitating alignment among diverse stakeholders.\n\n**Transition to Functional Prototype:**\n\nOnce consensus was reached on the overall structure, I began building the interactive RShiny version. The low-fidelity prototype informed decisions about tab organization, plot placement, map interactions, and wording for instructions.",
        images: [LLmockup],
        imageCaption:
          "Fig. 1. Rapid low-fidelity prototype in MS PowerPoint illustrating the intial design concept.",
      },
      test: {
        title: "Stakeholder Review & Feedback",
        content:
          "Because researchers and collaborators were spread across multiple projects and schedules, a full formal usability study was not feasible. However, I conducted a series of focused feedback sessions to evaluate usability and ensure the dashboard delivered on stakeholder expectations.\n\n**Stakeholder Review:**\n\nI held a collaborative review meeting with research leads where we walked through the functional dashboard together. During this session, we assessed:\n\n• Navigation clarity\n\n• Visual readability and data interpretation\n\n• Accuracy and completeness of environmental datasets\n\n• Clarity of instructions and interaction cues\n\n**Asynchronous Testing:**\n\nFollowing the initial walkthrough, each team member was invited to test the dashboard independently on their own device and schedule. Their feedback confirmed that:\n\n• The dashboard was easy to navigate and intuitive for both technical and non-technical users\n\n• Visualizations and tables were clear, legible, and aligned with their analytical needs\n\n• Written instructions on the dashboard made it easy to understand how to explore datasets\n\n• The dashboard met or exceeded their expectations for content completeness and accessibility\n\nAlthough informal, this iterative feedback loop allowed me to refine labeling, simplify plot controls, and ensure a consistent and coherent user experience.",
      },
    },
  },
];
