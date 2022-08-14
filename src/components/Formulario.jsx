import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from '../Styles/Formulario.module.css'


const Formulario = ({ obtenerDatos, finalizarCompra }) => {

    const { register, formState: { errors }, handleSubmit } = useForm()
    const [envioDatos, setEnvioDatos] = useState(false)


    const onSubmit = (data, e) => {
        obtenerDatos(data)
        e.target.reset()
        setEnvioDatos(true)
    }

    return (
        <div className={styles.container}>
            {!envioDatos   //Es el estado que usa el ternario para mostrar el formulario o mostrar el mensaje final para finalizar la compra
                ? <div className={styles.formContainer}>

                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                        <h1>Datos personales</h1>
                        <div className={styles.formBox}>
                            <label className={styles.campo}>Nombre</label>
                            <input className={styles.inputForm} type="text" {...register('nombre', {
                                required: true,
                                placeholder: "Ingrese su nombre",
                                pattern: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
                            })} />
                            {errors.nombre?.type === 'required' && <p className={styles.error}>Campo requerido</p>}
                        </div>
                        <div className={styles.formBox}>
                            <label className={styles.campo}>Apellido</label>
                            <input className={styles.inputForm} type="text" {...register('apellido', {
                                required: true,
                                placeholder: "Ingrese su apellido"
                            })} />
                            {errors.apellido?.type === 'required' && <p className={styles.error}>Campo requerido</p>}
                        </div>
                        <div className={styles.formBox}>
                            <label className={styles.campo}>Calle y n°</label>
                            <input className={styles.inputForm} type="text" {...register('calle', {
                                required: true,
                                placeholder: "Ej: Sarratea 2501"
                            })} />
                            {errors.calle?.type === 'required' && <p className={styles.error}>Campo requerido</p>}
                        </div>
                        <div className={styles.formBox}>
                            <label className={styles.campo}>Email</label>
                            <input className={styles.inputForm} type="text" {...register('email', {
                                required: true,
                                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                            })} />
                            {errors.email?.type === 'required' && <p className={styles.error}>Campo requerido</p>}
                            {errors.email?.type === 'pattern' && <p className={styles.error}>El formato de email es incorrecto</p>}
                        </div>
                        <h1>Datos de tarjeta</h1>
                        <div className={styles.formBox}>
                            <label className={styles.campo}>Tarjeta</label>
                            <select {...register('tarjeta')}>
                                <option className={styles.option} value="visa">Visa</option>
                                <option className={styles.option} value="mastercard">MasterCard</option>
                                <option className={styles.option} value="american">American Express</option>
                            </select>
                        </div>
                        <div className={styles.formBox}>
                            <label className={styles.campo}>Nombre y apellido del titular de tarjeta</label>
                            <input className={styles.inputForm} type="text" {...register("titular", {
                                required: true,
                                minLength: 3
                            })} />
                            {errors.titular?.type === 'required' && <p className={styles.error}>Campo requerido</p>}
                        </div>
                        <div className={styles.formBox}>
                            <label className={styles.campo}>N° de tarjeta</label>
                            <input className={styles.inputForm} type="number"  {...register("numero", {
                                required: true,
                                maxLength: 16,
                                minLength: 16,
                                isNaN: true
                            })} />
                            {errors.numero?.type === 'required' && <p className={styles.error}>Campo requerido</p>}
                            {errors.numero?.type === 'maxLength' && <p className={styles.error}>Debe contener 16 digitos</p>}
                            {errors.numero?.type === 'minLength' && <p className={styles.error}>Debe contener 16 digitos</p>}
                        </div>
                        <div className={styles.formBox}>
                            <label className={styles.campo}>Expiración</label>
                            <input type="number" {...register("expiracion", {
                                required: true,
                                maxLength: 4,
                                minLength: 4,
                                isNaN: true
                            })} />
                            {errors.expiracion?.type === 'required' && <p className={styles.error}>Campo requerido</p>}
                            {errors.expiracion?.type === 'maxLength' && <p className={styles.error}>Debe contener 4 digitos</p>}
                            {errors.expiracion?.type === 'minLength' && <p className={styles.error}>Debe contener 4 digitos</p>}
                        </div>
                        <div className={styles.formBox}>
                            <label className={styles.campo}>Código de seguridad</label>
                            <input type="number" {...register("codigo", {
                                required: true,
                                maxLength: 4,
                                minLength: 3,
                                isNaN: true
                            })} />
                            {errors.codigo?.type === 'required' && <p className={styles.error}>Campo requerido</p>}
                            {errors.codigo?.type === 'maxLength' && <p className={styles.error}>Debe contener 3 0 4 digitos</p>}
                            {errors.codigo?.type === 'minLength' && <p className={styles.error}>Debe contener 3 o 4 digitos</p>}
                        </div>
                        <div className={styles.btnContainer}>
                        <button className={styles.btnContinuar} type="submit" value="Continuar">Continuar</button>
                        </div>
                    </form>
                </div>

                : <div className={styles.confirm}>
                    <h1>¿Confirmas tu compra?</h1>
                    <div>
                        <button className={styles.btnConfirm} onClick={finalizarCompra}>Acepto</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Formulario

