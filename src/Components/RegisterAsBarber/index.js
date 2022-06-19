import { useState } from "react";
import { addBarber } from "../../database/db";
import { Container } from "./styles";


function RegisterAsBarber() {

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }))
    }
    const onSubmit = (e) => {
        e.preventDefault();
        addBarber(form)
        setForm(init)
    }
    const init = {
        name: "",
        email: "",
        address: "",
        price: "",
        phone: ""
    };
    const [form, setForm] = useState(init)
    const renderForm = (
        <div className="form">
            <form onSubmit={onSubmit}>
                <div className="input-container">
                    <label>name </label>
                    <input type="text" name="name" value={form.name} onChange={onChange} required />
                </div>
                <div className="input-container">
                    <label>Email </label>
                    <input type="text" name="email" value={form.email} onChange={onChange} required />
                </div>
                <div className="input-container">
                    <label>address </label>
                    <input type="text" name="address" value={form.address} onChange={onChange} required />
                </div>
                <div className="input-container">
                    <label>Phone </label>
                    <input type="text" name="phone" value={form.phone} onChange={onChange} required />
                </div>
                <div className="input-container">
                    <label>price </label>
                    <input type="text" name="price" value={form.price} onChange={onChange} required />
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (
        <Container>
            <div className="app">
                <div className="login-form">
                    <div className="title">Register</div>
                    {renderForm}
                </div>
            </div>
        </Container>
    );
}

export default RegisterAsBarber;