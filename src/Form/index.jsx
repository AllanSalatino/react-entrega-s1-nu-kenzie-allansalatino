import "./mediaQueryMax768.css"
import "./mediaQueryMin768.css"
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";

export default function Form({addNewTransation}){

    const Schema = yup
        .object()
        .shape({
            description: yup.string().required("Descrição obrigatória"),
            type: yup.string().required("Selecione uma opção"),
            value: yup.number("Escreva um valor").required("Escreva um valor"),
        });
    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm({
            resolver: yupResolver(Schema),
        });
     
        const onSubmit = (data) => {
        if(data.type === "Saida"){
            data.value = data.value * -1
        }
        addNewTransation(data)
    }

    return(
        <form className="Form" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="description">Descrição</h3>
            <input className="inputDescription" type="text" placeholder="Digete aqui sua descrição" {...register("description")} required></input>
            <p className="exemple">Ex: Compra de roupas</p>

            <div className="containerInputsValues">
                <section className="sectionValues">
                    <h3 className="value">Valor</h3>
                    <section className="sectionValue">
                        <input className="inputValue" type="text" placeholder="Ex: 1" {...register("value")} required/>
                        <span className="dollarSign">R$</span>
                    </section>
                </section>

                <section className="sectionTypeValue">
                    <h3 className="TypeValue">Tipo de valor</h3>
                    <select className="selectTypeValue" name="Tipo" id="select" {...register("type")} required>
                        <option value="">Tipo...</option>
                        <option value="Entrada">Entrada</option>
                        <option value="Saida">Saida</option>
                    </select>
                </section>
            </div>

            <button className="buttonForm" onSubmit={() => onSubmit()}>Inserir valor</button>
        </form>
    )
}