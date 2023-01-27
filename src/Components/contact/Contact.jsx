import React from 'react'
import './contact.css'
import {useForm} from 'react-hook-form'
import {MdMarkEmailRead} from 'react-icons/md'
import {TbBrandMessenger} from 'react-icons/tb'
import {SiWhatsapp} from 'react-icons/si'


const Contact = () => {
  const {
    register,
    trigger,
    formState:{errors}
} = useForm()

const handleSubmit = async (e) => {

     
  const isValid = await trigger()
  if (!isValid){
      e.preventDefault()
  }
}


  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact ME</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdMarkEmailRead className='contact__option-icon' />
            <h4>Email</h4>
            <h5>Email Brian</h5>
            <a href='mailto:mmasafujnr@gmail.com' target="_blank" rel= 'noopener noreferrer'>Send a mesage</a>
          </article>
          <article className='contact__option'>
            <TbBrandMessenger className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Connect with Brian on Messenger</h5>
            <a href='https://m.me/reizybrian' target="_blank" rel= 'noopener noreferrer'>Send a mesage</a>
          </article>
          <article className='contact__option'>
            <SiWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>Chat with me on Whatsapp</h5>
            <a href='https://api.whatsapp.com/send?phone+254716169029' target="_blank" rel="noreferrer" >Send a mesage</a>
          </article>
        </div>
        <form
                      target='_blank'
                      onSubmit={handleSubmit}
                      method= "POST"
                      action='https://formsubmit.co/wangilabrianwanyonyi@gmail.com'
                    >
                        <input
                            type ='text'
                            placeholder='NAME'
                            {...register("name", {
                                required:true,
                                minLength:3
                            })}
                        />
                       { errors.name && (
                            <p>
                               { errors.name.type === "required" && "This field is required."}
                               { errors.name.type === "minLength" && "Maimun length is 3 characters"}
                            </p>
                        )}
                        <input
                            type ='text'
                            placeholder='EMAIL'
                            {...register("email", {
                                required:true,
                                pattern : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                       { errors.email && (
                            <p>
                               { errors.email.type === "required" && "This field is required."}
                               { errors.email.type === "pattern" && "Enter a valid email address"}
                            </p>
                        )}
                        <textarea
                        rows = {4}
                        cols = {50}
                        placeholder='MESSAGE'
                        {...register("message", {
                            required:true,
                            minLength:10
                        })}
                    />
                   { errors.message && (
                        <p>
                           { errors.message.type === "required" && "This field is required."}
                           { errors.message.type === "minLength" && "Min char of 10"}
                        </p>
                    )}
                    <button type='submit' className='btn btn-primary'>
                        Submit
                    </button>
                    </form>
      </div>
    </section>
  )
}

export default Contact