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
                            3. n-house performed quantitative confirmations with highly accurate LC/MS/MS technology
                        </AccordionItemPanel>

                        <AccordionItemPanel>
                            4. An extensive drug testing offering
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
                </Accordion>
            </div>
        </div>
    </div>
  )
}

