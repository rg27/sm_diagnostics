export const Navigation = (props) => {
    return (
        <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
            <div className='container'>
                <div className='navbar-header'>
                    <button
                        type='button'
                        className='navbar-toggle collapsed'
                        data-toggle='collapse'
                        data-target='#bs-example-navbar-collapse-1'
                    >
                        {' '}
                        <span className='sr-only'>Toggle navigation</span>{' '}
                        <span className='icon-bar'></span>{' '}
                        <span className='icon-bar'></span>{' '}
                        <span className='icon-bar'></span>{' '}
                    </button>

                    <a className='navbar-brand page-scroll' href='#page-top'>
                        SM DIAGNOSTICS
                    </a>{' '}
                </div>

                <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
                    <ul className='nav navbar-nav navbar-right'>
                        <li>
                            <a href='#about' className='page-scroll'>
                                About
                            </a>
                        </li>

                        <li>
                            <a href='#services' className='page-scroll'>
                                Services
                            </a>
                        </li>

                        <li>
                            <a href='#faqs' className='page-scroll'>
                                FAQs
                            </a>
                        </li>

                        <li>
                            <a href='#contact' className='page-scroll'>
                                Contact
                            </a>
                        </li>

                        <li>
                            <a href='mailto:info@smdiagnosticsllc.com' className='page-scroll'>
                                <strong class ="strong">Email Us (<i class="fa fa-envelope"></i> info@smdiagnosticsllc.com)</strong>
                            </a>
                        </li>

                        <li>
                            <a href='tel:7864221679' className='page-scroll'>
                                <strong class ="strong">Call Us (<i class="fa fa-mobile"></i> 786-422-1679)</strong>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
