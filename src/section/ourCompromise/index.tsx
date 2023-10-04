import { Limit } from "../../components/limit"
import { TitlePage } from "../../components/titlepage"
import { Box, Card, ContainerCard, Descricao, OurCompromiseContainer, TitleCompromisso } from "./style"
import { GoGoal } from 'react-icons/go';
import { IoDiamondOutline } from 'react-icons/io5';
import { MdOutlineVisibility } from 'react-icons/md';

export const OurCompromise = () => {
    return (
        <OurCompromiseContainer>
            <Limit>
                <TitlePage title="Nosso Compromisso" position="center" textAlign="center" />

                <ContainerCard>
                    <Card>
                        <Box>
                            <TitleCompromisso>
                                <GoGoal size= '2rem'/>
                                Missão
                            </TitleCompromisso>
                        </Box>
                        <Descricao>
                            <p>
                                Oferecer experiências únicas e memoráveis em diversas áreas, proporcionando uma fuga da rotina e a oportunidade de criar memórias inesquecíveis para nossos clientes.
                            </p>
                        </Descricao>
                    </Card>

                    <Card>
                        <Box>
                            <TitleCompromisso>
                                <MdOutlineVisibility size= '2rem'/>
                                Visão
                            </TitleCompromisso>
                        </Box>
                        <Descricao>
                            <p>
                                Oferecer experiências únicas e memoráveis em diversas áreas, proporcionando uma fuga da rotina e a oportunidade de criar memórias inesquecíveis para nossos clientes.
                            </p>
                        </Descricao>
                    </Card>

                    <Card>
                        <Box>
                            <TitleCompromisso>
                                <IoDiamondOutline size= '2rem'/>
                                Valores
                            </TitleCompromisso>

                        </Box>
                        <Descricao>
                            <p>
                                Oferecer experiências únicas e memoráveis em diversas áreas, proporcionando uma fuga da rotina e a oportunidade de criar memórias inesquecíveis para nossos clientes.
                            </p>
                        </Descricao>
                    </Card>
                </ContainerCard>

            </Limit>
        </OurCompromiseContainer>
    )
}