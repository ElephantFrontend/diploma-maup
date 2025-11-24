import React, { useState, useEffect } from "react";
import css from "./Stepper.module.css"

/**
 * Глобальний компонент Stepper
 *
 * @param {Array} steps - [{ label: string, content: JSX }]
 * @param {number} activeStep - (опціонально) зовнішній індекс поточного кроку
 * @param {Function} onStepChange - (опціонально) колбек при зміні кроку
 */
function Stepper({ steps = [], activeStep, data, onStepChange, onSubmit }) {
    const [internalStep, setInternalStep] = useState(0);
    const isControlled = typeof activeStep === "number";
    const currentStep = isControlled ? activeStep : internalStep;
    const dataKeys = Object.keys(data);

    useEffect(() => {
        if (isControlled) setInternalStep(activeStep);
    }, [activeStep]);

    const handleChange = (newStep) => {
        if (newStep >= 0 && newStep < steps.length) {
            if (!isControlled) setInternalStep(newStep);
            onStepChange?.(newStep);
        }
    };

    const handleFinishSubmit = (e) => {
        e.preventDefault();
        onSubmit?.()
    }

    const nextStep = () => handleChange(currentStep + 1);
    const prevStep = () => handleChange(currentStep - 1);

    return (
        <div className={css['stepper-container']}>
            <div className={css['steps']}>
                {steps.map((step, index) => (
                    <div
                        key={index}
                        // className={`step ${index === currentStep ? "active" : ""} ${
                        //     index < currentStep ? "completed" : ""
                        // }`}
                        className={css['step']}
                    >
                        <div className={css['circle']}>{index + 1}</div>
                        {/*<div className={css['label']}>{step.label}</div>*/}
                    </div>
                ))}
            </div>

            <div className={css['step-content']}>{steps[currentStep]?.content}</div>

            <div className={css['buttons']}>
                <button onClick={prevStep} disabled={currentStep === 0}>
                    Назад
                </button>

                {currentStep < steps.length - 1 ? (
                    <button
                        onClick={nextStep}
                        disabled={!data[dataKeys[currentStep]]}>
                        Наступна
                    </button>
                ) : (
                    <button
                        onClick={handleFinishSubmit}
                        disabled={!data[dataKeys[currentStep]]}>
                        Підібрати
                    </button>
                )}
            </div>
        </div>
    );
}

export default Stepper