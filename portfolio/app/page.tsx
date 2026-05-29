import Navigation from '@/app/components/navigation/navigation'
import Hero from '@/app/components/hero/Hero';
import About from '@/app/components/about/about';
import Skills from '@/app/components/skills/skills';
import Projects from '@/app/components/projects/projects';
import Contacts from '@/app/components/contacts/Contacts';
import Footer from '@/app/components/footer/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}


// export default function Home() {
//   return (
//     <>
//       <Navigation />
//       <main>
//         <Hero />
//         <About />
//         <Skills />
//         <Projects />
//         <Contacts />
//       </main>
//     </>
//   );
// }