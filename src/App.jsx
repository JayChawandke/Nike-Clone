import{ CustomerRevies, Footer, Hero, PopularProducts, Services, SpecialOffers, Subsribe, SuperQuality} from './Sections/Index';
import Nav from './Components/Nav';
const app = ()=>(
  <main className = "reletive">
    <section>
      <Nav/>
    </section>
    <section
    className="xl:padding-l
    wide:padding-r padding-b">
      <Hero/>
    </section>

    <section className="padding">
      <PopularProducts/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>

    <section className="padding">
      <SpecialOffers/>
    </section>

    <section className="bg-pale-blue 
    padding">
     <CustomerRevies/>
    </section>
    <section className="padding-x
    sm:py-32 py-16 w-full">
      <Subsribe/>
    </section>
    
    <section className="bg-black 
    padding-x padding-t pb-8">
      <Footer/>
    </section>


  </main>
);

export default app;