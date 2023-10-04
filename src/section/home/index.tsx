import { Limit } from "../../components/limit"
import { HomeContainer, Hometext } from "./style"

export const Home: React.FC = () => {

    return (
        <HomeContainer>
        <Limit>
         <Hometext>
         <h1>Encontre sua Experiência</h1>

          <p>Conectamos quem deseja conhecer novas vivências a experiências inesquecíveis</p>
         </Hometext>
        </Limit>
      </HomeContainer>
    )
}