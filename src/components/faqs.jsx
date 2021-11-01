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

export const Faqs = (props) => {
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
                {props.data
                    ? props.data.map((d, i) => (
                    <div key={`${d.question}-${i}`}>
                    {' '}
                        <Accordion allowZeroExpanded>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        {d.question}
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    {d.answer}
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                ))
                : 'Loading...'}
            </div>
        </div>
    </div>
  )
}

