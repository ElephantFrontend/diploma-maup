import css from "./SelectionFormPage.module.css"
import React, { useState } from "react";
import Stepper from "../../components/Stepper/Stepper.jsx";

function SelectionFormPage({onSubmit}) {
    const [activeStep, setActiveStep] = useState(0);
    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    const handleOnSubmit = () => {
        onSubmit(data);
    }
    const [data, setData] = useState({
        speciality: "",
        camouflage: "",
        season: "",
    });
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const steps = [
        {
            label: "Інформація",
            content: (
                <div>
                    <h3>До якого типу спеціальності Ви відноситесь?</h3>

                    <div className={css['step-content']}>
                        <label>
                            <input
                                type="radio"
                                name='speciality'
                                value='infantry'
                                checked={data.speciality === "infantry"}
                                onChange={handleChange}
                            />
                            Піхота
                        </label>

                        <label>
                            <input
                                type="radio"
                                name='speciality'
                                value='stormtrooper'
                                checked={data.speciality === "stormtrooper"}
                                onChange={handleChange}
                            />
                            Розвідка/Штурмовик
                        </label>

                        <label>
                            <input
                                type="radio"
                                name='speciality'
                                value='artillery'
                                checked={data.speciality === "artillery"}
                                onChange={handleChange}
                            />
                            БПЛА/Артилерія/Вогнева підтримка/Медик еваку
                        </label>

                        <label>
                            <input
                                type="radio"
                                name='speciality'
                                value='rear-area'
                                checked={data.speciality === "rear-area"}
                                onChange={handleChange}
                            />
                            Водій/Тилові спеціальності/Штабні посади
                        </label>
                    </div>
                </div>
            ),
        },
        {
            label: "Підтвердження",
            content: (
                <div>
                    <h3>Який тип камуфляжу Ви обираєте?</h3>

                    <div className={css['step-content']}>
                        <label>
                            <input
                                type="radio"
                                name='camouflage'
                                value='pixel'
                                checked={data.camouflage === "pixel"}
                                onChange={handleChange}
                            />
                            Піксель (цифровий камуфляж, стандарт ЗСУ)
                        </label>

                        <label>
                            <input
                                type="radio"
                                name='camouflage'
                                value='multicam'
                                checked={data.camouflage === "multicam"}
                                onChange={handleChange}
                            />
                            Мультикам (універсальний для змішаного рельєфу)
                        </label>

                        <label>
                            <input
                                type="radio"
                                name='camouflage'
                                value='olive'
                                checked={data.camouflage === "olive"}
                                onChange={handleChange}
                            />
                            Олива (однотонна, класична, сумісна з більшістю систем)
                        </label>

                        <label>
                            <input
                                type="radio"
                                name='camouflage'
                                value='other'
                                checked={data.camouflage === "other"}
                                onChange={handleChange}
                            />
                            Інша/Не принципово
                        </label>
                    </div>
                </div>
            ),
        },
        {
            label: "Готово",
            content: (
                <div>
                    <h3>На Яку пору року ви хочете підібрати тактичний одяг?</h3>

                    <div className={css['step-content']}>
                        <label>
                            <input
                                type="radio"
                                name='season'
                                value='winter'
                                checked={data.season === "winter"}
                                onChange={handleChange}
                            />
                            Зима
                        </label>

                        <label>
                            <input
                                type="radio"
                                name='season'
                                value='spring'
                                checked={data.season === "spring"}
                                onChange={handleChange}
                            />
                            Весна
                        </label>

                        <label>
                            <input
                                type="radio"
                                name='season'
                                value='summer'
                                checked={data.season === "summer"}
                                onChange={handleChange}
                            />
                            Літо
                        </label>

                        <label>
                            <input
                                type="radio"
                                name='season'
                                value='autumn'
                                checked={data.season === "autumn"}
                                onChange={handleChange}
                            />
                            Осінь
                        </label>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <Stepper
            steps={steps}
            activeStep={activeStep}
            data={data}
            onStepChange={handleStepChange}
            onSubmit={handleOnSubmit}
        />
    );
}

export default SelectionFormPage;
