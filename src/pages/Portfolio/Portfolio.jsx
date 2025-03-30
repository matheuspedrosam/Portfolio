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
      <Header />
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
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-1">
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
    <CustomCard title="My stacks" icon="Layers" description="Software Tools">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 max-h-50 overflow-y-auto custom-scrollbar md:grid-cols-3 lg:grid-cols-3">
        <Item img={"/react-logo.svg"} description="React" />
        <Item img={"/node-logo.svg"} description="Node" />
        <Item img={"/tailwind-logo.svg"} description="Tailwind" />
        <Item img={"/javascript-logo.svg"} description="Javascript" />
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
        <Item img={"/bootstrap-logo.svg"} description="Bootstrap" />
      </div>
    </CustomCard>
  )
}


function Projects() {
  return (
    <CustomCard title="My projects" icon="BriefcaseBusiness" description="Works gallery">
      <div className="grid justify-center h-full">
        <Carousel className="w-full max-w-2xs min-[400px]:max-w-xs sm:max-w-sm mb-12 sm:mb-0 min-[1300px]:!max-w-xs min-[1600px]:!max-w-sm">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card className="p-4">
                  <CardContent className="grid gap-4 p-0">
                    <div className="h-fit">
                      <img src="https://matheuspedrosam.github.io/Portfolio/imagens/jackTheJumper.png" className="rounded-sm w-full h-45" />
                    </div>
                    <h2 className="font-bold">O Menino Saltador</h2>
                    <p className="text-sm">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, obcaecati facilis blanditiis temporibus ea error magnam tenetur laboriosam perferendis quaerat voluptatem optio, quasi ad id officia iure. Itaque, et distinctio?
                    </p>
                    <Button>Ver</Button>
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
      <CustomCard>
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
    <CustomCard>
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

        <div className={`p-2 ${theme === "light" ? 'bg-white' : 'bg-neutral-900'} flex gap-2 flex-wrap rounded-sm`}>
          <Tag icon="MapPin" description="Brazil" className="min-w-20" />
          <Tag icon="Globe" description="English and Portuguese" className="min-w-20" />
          <Tag icon="Flag" description="Software Developer" className="min-w-20" />
          <Tag icon="Flag" description="Bachalor of Technology" className="min-w-20" />
        </div>
        <div className="flex gap-4">
          <Button className="flex-1"><IconComponent icon="Linkedin" className={`${theme === "light" ? 'text-neutral-400' : 'text-neutral-800'}`} /> Linked-in</Button>
          <Button className="flex-1"><IconComponent icon="Mail" className={`${theme === "light" ? 'text-neutral-400' : 'text-neutral-800'}`} /> E-mail</Button>
        </div>
      </div>
    </CustomCard>
  )
}

function Skills() {
  return (
    <CustomCard title="My skills" icon="Grid2x2" description="Software skills">
      <div className="grid gap-2 overflow-y-auto h-60 custom-scrollbar">
        <Item icon="Eye" description="Front-end Developing" />
        <Item icon="Server" description="Back-end Developing" />
        <Item icon="Database" description="Database" />
        <Item icon="Link" description="API Restful" />
        <Item icon="BugOff" description="Programing logic" />
        <Item icon="Variable" description="Data structures and Algorithm" />
      </div>
    </CustomCard>
  )
}

function AboutMe() {
  return (
    <CustomCard title="About me" icon="Info" description="Know me more">
      <div className="max-h-80 overflow-y-auto custom-scrollbar">
        <p className="block mb-4">
          I am excited to apply for the Software Developer position at [Company Name]. With a strong background in web development and a passion for creating efficient and scalable applications, I am eager to bring my expertise in JavaScript, React, and Node.js to your team.
        </p>
        <p className="block mb-4">
          During my time as a software developer, I have worked extensively with front-end and back-end technologies, developing user-friendly applications that enhance customer experiences. In my most recent role, I contributed to building a dynamic web application that improved user engagement by 30%. I take pride in writing clean, maintainable code and collaborating with cross-functional teams to deliver high-quality software solutions.
        </p>
        <p className="block mb-4">
          Beyond my technical skills, I am committed to continuous learning and problem-solving. My experience working on full-stack projects has honed my ability to debug complex issues, optimize performance, and implement best practices in software development.
        </p>

        <p className="block mb-4">
          I am particularly drawn to [Company Name] because of its commitment to innovation and its focus on delivering cutting-edge solutions. I believe my skills align well with your company's mission, and I am eager to contribute to your ongoing success.
        </p>

        <p className="block mb-4">
          I welcome the opportunity to discuss how my experience and skills can benefit your team. Thank you for your time and consideration. I look forward to your response.
        </p>

        <p className="block mb-4">
          Best regards, [Your Name]
        </p>
      </div>
    </CustomCard >
  )
}

function Courses() {
  return (
    <CustomCard title="My certifications" icon="GraduationCap" description="Some courses">
      <div className="grid justify-center items-center h-full">
        <Carousel className="w-full max-w-3xs mb-12 sm:mb-0">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card className="p-0 overflow-hidden">
                  <img src="/Certificado ReactJs - Udemy.jpg" className="block w-full h-full rounded-sm m-auto" />
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
    <CustomCard className="overflow-hidden lg:col-span-2 xl:col-span-1">
      <div className="grid items-center h-full">
        <Marquee gap={2} className="!p-0 cursor-default">
          <Item icon="Handshake" description="Team work" hover={false} />
          <Item icon="Menu" description="Web developer" hover={false} />
          <Item icon="MonitorSmartphone" description="Responsible design" hover={false} />
          <Item icon="ScanEye" description="Problem solving" hover={false} />
          <Item icon="Database" description="Database Management" hover={false} />
          <Item icon="Cloud" description="Cloud Skills" hover={false} />
          <Item icon="Mic" description="Comunication" hover={false} />
          <Item icon="Smartphone" description="Mobile Development" hover={false} />
          <Item icon="Handshake" description="Team work" hover={false} />
          <Item icon="Menu" description="Web developer" hover={false} />
          <Item icon="MonitorSmartphone" description="Responsible design" hover={false} />
          <Item icon="ScanEye" description="Problem solving" hover={false} />
          <Item icon="Database" description="Database Management" hover={false} />
          <Item icon="Cloud" description="Cloud Skills" hover={false} />
          <Item icon="Mic" description="Comunication" hover={false} />
          <Item icon="Smartphone" description="Mobile Development" hover={false} />
          <Item icon="Handshake" description="Team work" hover={false} />
          <Item icon="Menu" description="Web developer" hover={false} />
          <Item icon="MonitorSmartphone" description="Responsible design" hover={false} />
          <Item icon="ScanEye" description="Problem solving" hover={false} />
          <Item icon="Database" description="Database Management" hover={false} />
          <Item icon="Cloud" description="Cloud Skills" hover={false} />
          <Item icon="Mic" description="Comunication" hover={false} />
          <Item icon="Smartphone" description="Mobile Development" hover={false} />
          <Item icon="Handshake" description="Team work" hover={false} />
          <Item icon="Menu" description="Web developer" hover={false} />
          <Item icon="MonitorSmartphone" description="Responsible design" hover={false} />
          <Item icon="ScanEye" description="Problem solving" hover={false} />
          <Item icon="Database" description="Database Management" hover={false} />
          <Item icon="Cloud" description="Cloud Skills" hover={false} />
          <Item icon="Mic" description="Comunication" hover={false} />
          <Item icon="Smartphone" description="Mobile Development" hover={false} />
        </Marquee>
      </div>
    </CustomCard>
  )
}

// Comps

function CustomCard(props) {
  const { title, icon, description, children, className } = props;

  return (
    <Card className={`p-4 ${className}`}>
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