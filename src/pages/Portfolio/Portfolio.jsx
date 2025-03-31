import Header from "@/components/Header/Header";
import { PageContainer } from "@/components/PageContainer/PageContainer";
import AvatarUI from "@/components/ui/Custom/AvatarUI/AvatarUI";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import * as LucideIcons from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/Custom/Marquee/Marquee";
import { useTheme } from "@/components/theme-provider";
import { useEffect, useState } from "react";
import { certifications, projects } from "./data";

export function Portfolio() {
  const [isSmallDevice, setIsSmallDevice] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <PageContainer className="min-h-dvh">
      <Header isSmallDevice={isSmallDevice} />
      <main className="grid grid-cols-1 p-4 gap-4 lg:grid-cols-2 xl:grid-cols-3">

        <SubGridContainer>
          {isSmallDevice && <Me />}
          <Stacks />
          <Projects />
        </SubGridContainer>

        <SubGridContainer>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
            <Infos />
          </div>
          {!isSmallDevice && <Me />}
          <Skills />
        </SubGridContainer>

        <SubGridContainer className="col-span-1 lg:col-span-2 xl:col-span-1">
          <div className="grid gap-4 grid-cols-1 xl:grid-cols-1">
            <AboutMe />
            <Courses />
            <Services />
          </div>
        </SubGridContainer>

      </main>
    </PageContainer>
  );
}

// Page comps

function SubGridContainer({ children, className }) {
  return (
    <div className={`grid gap-4 ${className}`}>
      {children}
    </div>
  )
}

function Stacks() {
  return (
    <CustomCard id="stacks" title="My stacks" icon="Layers" description="Software Tools">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 max-h-50 overflow-y-auto custom-scrollbar md:grid-cols-3 lg:grid-cols-3">
        <Item img={"/react-logo.svg"} description="React" />
        <Item img={"/node-logo.svg"} description="Node" />
        <Item img={"/tailwind-logo.svg"} description="Tailwind" />
        <Item img={"/javascript-logo.svg"} description="Javascript" />
        <Item img={"/typescript-logo.svg"} description="Typescript" />
        <Item img={"/html-5-logo.svg"} description="Html5" />
        <Item img={"/css-3-logo.svg"} description="Css3" />
        <Item img={"/mongodb-logo.svg"} description="Mongodb" />
        <Item img={"/firebase-logo.svg"} description="Firebase" />
        <Item img={"/google-cloud-logo.svg"} description="GCP" />
        <Item img={"/shadcnUI-logo.svg"} description="ShadcnUI" />
        <Item img={"/react-native-logo.svg"} description="React Native" />
        <Item img={"/vscode-logo.svg"} description="Vscode" />
        <Item img={"/nextJs-logo.svg"} description="NextJs" />
        <Item img={"/nestJs-logo.svg"} description="NestJs" />
        <Item img={"/python-logo.svg"} description="Python" />
        <Item img={"/bootstrap-logo.svg"} description="Bootstrap" />
        <Item img={"/github-logo.svg"} description="Github" />
      </div>
    </CustomCard>
  )
}


function Projects() {
  return (
    <CustomCard id="projects" title="My projects" icon="BriefcaseBusiness" description="Works gallery">
      <div className="grid justify-center h-fit">
        <Carousel className="w-full max-w-2xs min-[380px]:max-w-xs sm:max-w-sm mb-12 sm:mb-0 min-[1300px]:!max-w-xs min-[1600px]:!max-w-sm">
          <CarouselContent className="h-100">
            {projects.map((project, index) => (
              <CarouselItem key={index}>
                <Card className="p-4 h-full">
                  <CardContent className="flex flex-col justify-between p-0 h-full">
                    <div>
                      <div className="h-fit mb-4">
                        <img src={project.image} className="rounded-sm w-full border" />
                      </div>
                      <h2 className="font-bold">{project.title}</h2>
                    </div>
                    <p className="text-sm">
                      {project.description}
                    </p>
                    {project.link
                      ? <a href={project.link} target="_blank"><Button className="w-full">See</Button></a>
                      : <Button className="w-full" disabled>Private</Button>
                    }
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="top-auto -bottom-15 left-20 sm:top-1/2 sm:-left-12 sm:-translate-y-1/2" />
          <CarouselNext className="top-auto -bottom-15 right-20 sm:top-1/2 sm:-right-12 sm:-translate-y-1/2" />
        </Carousel>
      </div>
    </CustomCard>
  )
}

function Infos() {
  return (
    <>
      <CustomCard id="infos">
        <div className="grid h-full gap-4">
          <h2 className="font-bold text-5xl text-center">04<span className="font-semibold">y</span></h2>
          <Tag icon="GraduationCap" description="Of study" descClassName="lg:text-xs xl:text-sm" />
        </div>
      </CustomCard>
      <CustomCard>
        <div className="grid h-full gap-4">
          <h2 className="font-bold text-5xl text-center">20<span className="font-semibold">+</span></h2>
          <Tag icon="Wrench" description="Projects" descClassName="lg:text-xs xl:text-sm" />
        </div>
      </CustomCard>
      <CustomCard className="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1">
        <div className="grid h-full gap-4">
          <h2 className="font-bold text-5xl text-center">02<span className="font-semibold">y</span></h2>
          <Tag icon="Clock" description="Of experience" descClassName="lg:text-xs xl:text-sm" />
        </div>
      </CustomCard>
    </>
  )
}

function Me() {
  const { theme } = useTheme();

  return (
    <CustomCard id="me">
      <div className="grid gap-4">
        <div className="flex gap-4">
          <AvatarUI image="/Com Recorte.jpg" className="rounded-sm size-40 max-[390px]:size-30" />
          <div className="grid gap-2 h-fit">
            <div className={`${theme === "light" ? 'bg-neutral-100' : 'bg-neutral-800'} rounded-sm w-fit px-2 py-1 flex items-center gap-2 text-sm`}>
              <span className="relative flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
              </span>
              Available to work
            </div>
            <h1 className="font-semibold text-2xl max-[390px]:text-lg">Matheus Pedrosa</h1>
            <p className="text-neutral-500">I'm a Software Developer | Engineer</p>
          </div>
        </div>

        <div className={`${theme === "light" ? 'bg-white' : 'bg-neutral-900'} flex gap-2 flex-wrap rounded-sm`}>
          <Tag icon="MapPin" description="Brazil" className="min-w-20" />
          <Tag icon="Globe" description="English and Portuguese" className="min-w-20" />
          <Tag icon="Flag" description="Software Developer" className="min-w-20" />
          <Tag icon="Flag" description="Bachalor of Technology" className="min-w-20" />
        </div>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/matheus-pedrosa2002/" target="_blank" className="flex-1">
            <Button className="w-full">
              <IconComponent icon="Linkedin" className={`${theme === "light" ? 'text-neutral-400' : 'text-neutral-800'}`} />
              Linked-in
            </Button>
          </a>
          <a href="mailto:matheuspedrosa2002@gmail.com" target="_blank" className="flex-1">
            <Button className="w-full">
              <IconComponent icon="Mail" className={`${theme === "light" ? 'text-neutral-400' : 'text-neutral-800'}`} />
              E-mail
            </Button>
          </a>
        </div>
      </div>
    </CustomCard>
  )
}

function Skills() {
  return (
    <CustomCard id="skills" title="My skills" icon="Grid2x2" description="Software skills">
      <div className="grid gap-2 overflow-y-auto h-64 custom-scrollbar">
        <Item icon="Eye" description="Front-end Developing" />
        <Item icon="Server" description="Back-end Developing" />
        <Item icon="Database" description="Database" />
        <Item icon="Link" description="API Restful" />
        <Item icon="Bot" description="AI" />
        <Item icon="BugOff" description="Programing logic" />
        <Item icon="Variable" description="Data structures and Algorithm" />
      </div>
    </CustomCard>
  )
}

function AboutMe() {
  return (
    <CustomCard id="aboutMe" title="About me" icon="Info" description="Know me more" className="lg:col-span-2">
      <div className="xl:!h-80 overflow-y-auto custom-scrollbar">
        <p className="mb-4">
          Hi, I'm <strong>Matheus Pedrosa</strong>, a passionate Software Developer with a strong focus on JavaScript, React, and Node.js.
          I love building applications that are not only functional but also intuitive and scalable. My journey in development has been fueled by a deep curiosity for solving complex problems and optimizing digital experiences.
        </p>

        <p className="mb-6">
          With experience in full-stack development, I have worked on projects ranging from interactive web applications to backend architectures that power seamless user experiences.
          I take pride in writing clean, maintainable code and following best practices to ensure performance, security, and scalability.
        </p>

        <h2 className="text-2xl font-semibold mb-3">What I Bring to the Table:</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Front-end Expertise:</strong> Crafting responsive and dynamic interfaces using React and modern UI frameworks.</li>
          <li><strong>Back-end Development:</strong> Building robust APIs and server-side applications with Node.js and Express.</li>
          <li><strong>Database Management:</strong> Working with Firebase, Firestore, and SQL/NoSQL databases to store and manage data efficiently.</li>
          <li><strong>Performance Optimization:</strong> Debugging, refactoring, and improving applications to ensure smooth user experiences.</li>
          <li><strong>Collaboration & Problem-Solving:</strong> Working with cross-functional teams, adapting to challenges, and continuously learning.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Projects & Passion</h2>
        <p className="mb-6">
          My early projects were focused on solving everyday problems. One of my first creations was a Python bot that sent my parents the daily list of Airbnb guests via WhatsApp, automating a task that saved them valuable time. 
          This experience reinforced my belief that technology can simplify lives and streamline processes.
        </p>

        <p className="mb-6">
          Beyond coding, I am always eager to explore new technologies, and stay up-to-date with the latest industry trends.
          I'm also interested in furthering my education and exploring opportunities to expand my expertise, including a potential master's degree in 🇮🇹.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Let's Connect!</h2>
        <p className="mb-6">
          I'm always open to new opportunities, collaborations, and discussions about tech, innovation, and problem-solving. Feel free to reach out—I'd love to chat! 🚀
        </p>
      </div>
    </CustomCard >
  )
}

function Courses() {
  return (
    <CustomCard id="certifications" title="My certifications" icon="GraduationCap" description="Some courses" className="lg:col-start-1 lg:col-end-3">
      <div className="grid justify-center items-center h-full">
        <Carousel className="w-full max-w-3xs mb-12 sm:mb-0">
          <CarouselContent>
            {certifications.map((certification, index) => (
              <CarouselItem key={index}>
                <Card className="p-0 overflow-hidden">
                  <img src={certification.image} className="block w-full h-full rounded-sm m-auto" />
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="top-auto -bottom-15 left-20 sm:top-1/2 sm:-left-12 sm:-translate-y-1/2" />
          <CarouselNext className="top-auto -bottom-15 right-20 sm:top-1/2 sm:-right-12 sm:-translate-y-1/2" />
        </Carousel>
      </div>
    </CustomCard>
  )
}

function Services() {
  return (
    <CustomCard id="softSkills" className="overflow-hidden lg:col-span-2 xl:col-span-1">
      <div className="grid items-center h-full">
        <Marquee gap={2} className="!p-0 cursor-default">
          <Item icon="Handshake" description="Team work" hover={false} />
          <Item icon="Menu" description="Web developer" hover={false} />
          <Item icon="MonitorSmartphone" description="Responsive design" hover={false} />
          <Item icon="ScanEye" description="Problem solving" hover={false} />
          <Item icon="Database" description="Database Management" hover={false} />
          <Item icon="Cloud" description="Cloud Skills" hover={false} />
          <Item icon="Mic" description="Comunication" hover={false} />
          <Item icon="Smartphone" description="Mobile Development" hover={false} />
          <Item icon="Bot" description="AI" hover={false} />
          <Item icon="Handshake" description="Team work" hover={false} />
          <Item icon="Menu" description="Web developer" hover={false} />
          <Item icon="MonitorSmartphone" description="Responsive design" hover={false} />
          <Item icon="ScanEye" description="Problem solving" hover={false} />
          <Item icon="Database" description="Database Management" hover={false} />
          <Item icon="Cloud" description="Cloud Skills" hover={false} />
          <Item icon="Mic" description="Comunication" hover={false} />
          <Item icon="Smartphone" description="Mobile Development" hover={false} />
          <Item icon="Bot" description="AI" hover={false} />
          <Item icon="Handshake" description="Team work" hover={false} />
          <Item icon="Menu" description="Web developer" hover={false} />
          <Item icon="MonitorSmartphone" description="Responsive design" hover={false} />
          <Item icon="ScanEye" description="Problem solving" hover={false} />
          <Item icon="Database" description="Database Management" hover={false} />
          <Item icon="Cloud" description="Cloud Skills" hover={false} />
          <Item icon="Mic" description="Comunication" hover={false} />
          <Item icon="Smartphone" description="Mobile Development" hover={false} />
          <Item icon="Bot" description="AI" hover={false} />
          <Item icon="Handshake" description="Team work" hover={false} />
          <Item icon="Menu" description="Web developer" hover={false} />
          <Item icon="MonitorSmartphone" description="Responsive design" hover={false} />
          <Item icon="ScanEye" description="Problem solving" hover={false} />
          <Item icon="Database" description="Database Management" hover={false} />
          <Item icon="Cloud" description="Cloud Skills" hover={false} />
          <Item icon="Mic" description="Comunication" hover={false} />
          <Item icon="Smartphone" description="Mobile Development" hover={false} />
          <Item icon="Bot" description="AI" hover={false} />
        </Marquee>
      </div>
    </CustomCard>
  )
}

// Comps

function CustomCard(props) {
  const { id, title, icon, description, children, className } = props;

  return (
    <Card id={id} className={`p-4 ${className}`}>
      {(title || description) &&
        <CardHeader>
          <CardTitle className="flex justify-center items-center gap-2"><IconComponent icon={icon} className="text-blue-500" /> {title}</CardTitle>
          <CardDescription className="text-center">{description}</CardDescription>
        </CardHeader>
      }
      <CardContent className="p-0 h-full">
        {children}
      </CardContent>
    </Card>
  )
}

function Item({ icon, img, description, hover = true }) {
  const { theme } = useTheme();

  return (
    <div
      className={
        `p-2 flex gap-2 items-center ${theme === "light" ? 'bg-neutral-100' : 'bg-neutral-800'} rounded-sm
        ${hover && 'relative transition-transform hover:translate-y-[-2px] cursor-default'}
      `}>
      <div className={`${!img && 'p-2'} ${theme === "light" ? 'bg-neutral-200' : 'bg-neutral-900'} rounded-sm`}>
        {icon &&
          <IconComponent icon={icon} className="text-blue-500" />
        }
        {img &&
          <img src={img} className="size-9 rounded-sm"></img>
        }
      </div>
      <p>{description || 'Wireframing'}</p>
    </div>
  )
}

function Tag({ icon, description, className, descClassName }) {
  const { theme } = useTheme();

  return (
    <div className={`${className} flex flex-wrap gap-2 py-1 px-2 ${theme === "light" ? 'bg-neutral-100' : 'bg-neutral-800'} rounded-full items-center justify-center`}>
      <IconComponent icon={icon} size={18} className="text-blue-500" />
      <p className={`${descClassName} text-sm`}>{description}</p>
    </div>
  )
}

const IconComponent = ({ icon, size = 22, className }) => {
  const LucideIcon = LucideIcons[icon];

  if (!LucideIcon) return <p>?</p>;

  return <LucideIcon size={size} className={className ? className : "text-neutral-500"} />;
};