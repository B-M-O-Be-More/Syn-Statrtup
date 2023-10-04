import { useState } from "react";
import { Limit } from "../../components/limit"
import { TitlePage } from "../../components/titlepage"
import { Column, CommonQuestionsContainer, FAQAnswer, FAQContainer, FAQItemContainer, FAQQuestion, Subtitle, TitleTopico, Topico1, Topico2, Topicopeguntas1, Topicopeguntas2, Topicos } from "./style"

// interface FAQItem {
//     question: string;
//     answer: string;
// }

// interface FAQProps {
//     faqs: FAQItem[];
// }


export const CommonQuestions: React.FC = () => {

    const faqs = [
        {
            question: 'aaaaaa',
            answer: 'qwqweqw'
        },
        {
            question: 'aaaaaa',
            answer: 'qwqweqw'
        },
        {
            question: 'aaaaaa',
            answer: 'qwqweqw'
        },
        {
            question: 'aaaaaa',
            answer: 'qwqweqw'
        },
        {
            question: 'aaaaaa',
            answer: 'qwqweqw'
        },
        {
            question: 'aaaaaa',
            answer: 'qwqweqw'
        },
        {
            question: 'aaaaaa',
            answer: 'qwqweqw'
        },
        {
            question: 'aaaaaa',
            answer: 'qwqweqw'
        },
        {
            question: 'aaaaaa',
            answer: 'qwqweqw'
        }
    ]

    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        if (expandedIndex === index) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex(index);
        }
    };


    return (
        <CommonQuestionsContainer>
            <Limit>
                <TitlePage title="Perguntas Frequentes" position="left" textAlign="left" />

                <Subtitle>
                    Aqui estão algumas respostas para as perguntas que mais recebemos:
                </Subtitle>

                <Topicos>
                    <Column>
                        <TitleTopico>Tópico das Perguntas 1</TitleTopico>

                        <Topico1>
                            <FAQContainer>
                                {faqs.map((faq, index) => (
                                    <FAQItemContainer key={index}>
                                        <FAQQuestion onClick={() => toggleFAQ(index)}>
                                            {faq.question}
                                            <div style={{ fontSize: '25px' }}>{expandedIndex === index ? '-' : '+'}</div>
                                        </FAQQuestion>
                                        <FAQAnswer expanded={expandedIndex === index}>{faq.answer}</FAQAnswer>
                                    </FAQItemContainer>
                                ))}
                            </FAQContainer>
                        </Topico1>

                    </Column>
                    <Topico2>
                        <Column>
                            <TitleTopico>Tópico das Perguntas 2</TitleTopico>
                            <Topicopeguntas1>
                                <FAQContainer>
                                    {faqs.map((faq, index) => (
                                        <FAQItemContainer key={index}>
                                            <FAQQuestion onClick={() => toggleFAQ(index)}>
                                                {faq.question}
                                                <div style={{ fontSize: '25px' }}>{expandedIndex === index ? '-' : '+'}</div>
                                            </FAQQuestion>
                                            <FAQAnswer expanded={expandedIndex === index}>{faq.answer}</FAQAnswer>
                                        </FAQItemContainer>
                                    ))}
                                </FAQContainer>
                            </Topicopeguntas1>
                        </Column>
                        <Column>
                            <TitleTopico>Tópico das Perguntas 3</TitleTopico>
                            <Topicopeguntas2>
                                <FAQContainer>
                                    {faqs.map((faq, index) => (
                                        <FAQItemContainer key={index}>
                                            <FAQQuestion onClick={() => toggleFAQ(index)}>
                                                {faq.question}
                                                <div style={{ fontSize: '25px' }}>{expandedIndex === index ? '-' : '+'}</div>
                                            </FAQQuestion>
                                            <FAQAnswer expanded={expandedIndex === index}>{faq.answer}</FAQAnswer>
                                        </FAQItemContainer>
                                    ))}
                                </FAQContainer>
                            </Topicopeguntas2>
                        </Column>
                    </Topico2>
                </Topicos>
            </Limit>
        </CommonQuestionsContainer>)
}