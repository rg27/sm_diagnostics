import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
	name: '',
	email: '',
	message: '',
}

export const NewHeader = (props) => {
  	const [{ name, email, message }, setState] = useState(initialState)

	const handleChange = (e) => {
		const { name, value } = e.target
		setState((prevState) => ({ ...prevState, [name]: value }))
	}
  	const clearState = () => setState({ ...initialState })

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(name, email, message)
		emailjs
		.sendForm(
			'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
		)
		.then(
			(result) => {
			console.log(result.text)
			clearState()
			},
			(error) => {
			console.log(error.text)
			}
		)
	}
	return (
		<div>
			<div id='contact'>
				<div className='container'>
					<div className='col-md-6'>
						<div className='row'>
							<div className='section-title'>
								<h2>Covered by Medicare?</h2>
								<p>Get pre-qualified with the most accurate genetic test that decodes your DNA -- and guarantees your privacy -- you can discover your roots and what runs in your family!</p>
							</div>
							<form name='sentMessage' validate onSubmit={handleSubmit}>
								<div className='row'>
									<div className='col-md-6'>
										<div className='form-group'>
											<input
												type='text'
												id='name'
												name='name'
												className='form-control'
												placeholder='First Name '
												required
												onChange={handleChange}
											/>
											<p className='help-block text-danger'></p>
										</div>

                                        <div className='form-group'>
											<input
												type='text'
												id='name'
												name='name'
												className='form-control'
												placeholder='Phone Number'
												required
												onChange={handleChange}
											/>
											<p className='help-block text-danger'></p>
										</div>
									</div>
									<div className='col-md-6'>
										<div className='form-group'>
											<input
												type='text'
												id='name'
												name='name'
												className='form-control'
												placeholder='Last Name'
												required
												onChange={handleChange}
											/>
											<p className='help-block text-danger'></p>
										</div>
									</div>

                                    <div className='col-md-6'>
										<div className='form-group'>
											<input
												type='email'
												id='email'
												name='email'
												className='form-control'
												placeholder='Email'
												required
												onChange={handleChange}
											/>
											<p className='help-block text-danger'></p>
										</div>
									</div>
								</div>
                                <div className='form-group'>
                                            <input
                                                type='checkbox'
                                            ></input> By submitting, I consent to have a representative from SM Diagnosics LLC, contact me at the phone number I have provided regarding genetic testing products/services by phone, email, 
                                            and text message regardless of my status on any state or federal do-not-call lists and to verify health benefits 
                                            and history with my physician. Consent is not a condition of purchase. Insurance reimbursed items must qualify 
                                            and deductibles and coinsurance may apply.
                                            <p className='help-block text-danger'></p>
                                        </div>
								<div id='success'></div>
								<button type='submit' className='btn btn-custom btn-lg'>
								Lets Get Started
								</button>
							</form>
						</div>
					</div>

					<div className='col-md-6'>
                    {" "}
						<img src="img/old.jpg" className="img-responsive" alt="" />{" "}
					</div>
				</div>
			</div>
		</div>
	)
}

