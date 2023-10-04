import { Header } from "../components/header"
import { About } from "../section/about"
import { CommonQuestions } from "../section/commonQuestions"
import { Depoimentos } from "../section/depoimentos"
import { Experience } from "../section/experience"
import { Footer } from "../section/footer"
import { Home } from "../section/home"
import { MorePopular } from "../section/morePopular"
import { OurCompromise } from "../section/ourCompromise"

export const Page = () => {
    return(
        <>  
            <Header />
            <Home />
            <Experience />
            <MorePopular/>
            <Depoimentos />
            <About />
            <OurCompromise />
            <CommonQuestions />
            <Footer />
        </>
    )
}