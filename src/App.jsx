import {
  ScrolToTop,
  LandingForm,
  Industries,
  Brands,
  ShowMore,
  Footer,
  Header,
} from "./components/components";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Md } from "./assets/Imgs";
function App() {
  return (
    <BrowserRouter>
      <ScrolToTop />
      <div className="app">
        <div className="2xl:px-[15%] md:p-[20px] px-8">
          <div className="md:grid md:grid-cols-2 md:gap-16">
            <div className="hidden md:flex md:flex-col md:gap-4 ">
              <Header />
              <Industries />
              <Brands
                text={"text-[20px]"}
                align={"text-left"}
                justify={"justify-start"}
                gap={"gap-[28px]"}
                width={"w-[86px]"}
                height={"h-[40px]"}
                width2={"w-[104px]"}
                height2={"h-[49px]"}
                width3={"w-[82px]"}
                height3={"h-[34px]"}
                width4={"w-[95px]"}
                height4={"h-[72px]"}
              />
              <img src={Md} alt="img" className="w-[700px]" />
            </div>
            <div className="md:mt-[90px]">
              <Routes>
                <Route path="/" element={<LandingForm />} />
                <Route path="/More" element={<ShowMore />} />
              </Routes>
            </div>
          </div>
        </div>
        <div className="hidden md:flex mt-[10px] justify-center">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
