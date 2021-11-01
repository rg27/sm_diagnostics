import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

export const Faqs = () => {
  return (
    <div id='faqs' className='text-center'>
        <div className='container'>
            <div className='section-title'>
                <h2>Faqs</h2>
                <p>
                    Do you have a question about SM Diagnostics? Below is a list of frequently asked questions.
                </p>
            </div>

            <div className='row'>
                <Accordion allowZeroExpanded>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                What services do you offer? 
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            1. Predictive & Diagnostic Genetic testing
                        </AccordionItemPanel>

                        <AccordionItemPanel>
                            2. In-house performed qualitative immunoassay testing
                        </AccordionItemPanel>

                        <AccordionItemPanel>
                            3. In-house performed quantitative confirmations with highly accurate LC/MS/MS technology
                        </AccordionItemPanel>

                        <AccordionItemPanel>
                            4. An extensive drug testing offering
                        </AccordionItemPanel>

                        <AccordionItemPanel>
                            5. Customizable drug testing panels
                        </AccordionItemPanel>

                        <AccordionItemPanel>
                            6. Consulting services with industry-leading staff geneticists and toxicologists
                        </AccordionItemPanel>

                        <AccordionItemPanel>
                            7. Timely, easy to read reports
                        </AccordionItemPanel>

                        <AccordionItemPanel>
                            8. Multiple reporting options
                        </AccordionItemPanel>

                        <AccordionItemPanel>
                            9. Point of Care (POC) screening devices
                        </AccordionItemPanel>

                        <AccordionItemPanel>
                            10. Customized collection and pick-up services
                        </AccordionItemPanel>

                    </AccordionItem>
                    
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                What makes SM Diagnostics different?
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            1. Industry-leading turnaround time
                        </AccordionItemPanel>

                        <AccordionItemPanel>
                            2. Customizable panel options
                        </AccordionItemPanel>

                        <AccordionItemPanel>
                            3. Diagnostic laboratory expertise
                        </AccordionItemPanel>

                        <AccordionItemPanel>
                            4. Multiple billing options including a direct bill to insurance and client bill (where allowable)
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Who do I contact at SM Diagnostics to discuss results? 
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                                Customer support at (786)422-1679 can assist with facilitating your request.
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                What is SM Diagnostics turnaround time? 
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            1. 24 hours for immunoassay-qualitative results
                        </AccordionItemPanel>

                        <AccordionItemPanel>
                            2. 36 hours for LC/MS/MS quantification
                        </AccordionItemPanel>

                        <AccordionItemPanel>
                            3. PGx Testing- 5-7 days
                        </AccordionItemPanel>

                        <AccordionItemPanel>
                            4. CGx Testing- 10-15 days
                        </AccordionItemPanel>

                        <AccordionItemPanel>
                            5. UTI Testing- 48-72 hours
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                How can I customize my test panels with SM Diagnostics?
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            Customization allows you to tailor your monitoring protocol based upon the unique needs of your practice and patients. Contact your sales representative or contact customer support at (800) 641-0133 to discuss the value of test panel customization to your practice.
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                What are your hours of operation?
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            - Our normal business hours are M-F 9 a.m.- 5 p.m. EST.
                        </AccordionItemPanel>

                        <AccordionItemPanel>
                            - After hours contact: info@lab24inc.com
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                What are SM Diagnostics results reporting options?
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            - Automatic delivery of your results via fax server-no paper printing required.
                        </AccordionItemPanel>

                        <AccordionItemPanel>
                            - Automated delivery of our results into your EMR through an HL7 interface.
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </div>
  )
}

