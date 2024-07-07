import React, { useState } from "react";
import styles from "@/styles/wordle.module.css";

const FiveCharForm = ({ passValue, inputLength }: { passValue: (items: string) => void; inputLength: number }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toUpperCase(); // Convert to uppercase
        const regexPattern = `^[A-Z]{0,${inputLength}}$`;
        const regex = new RegExp(regexPattern);
        if (regex.test(value)) { // Validate that the input is uppercase and at most 5 characters long
            setInputValue(value);
        }
        if (value.length === inputLength) {
            passValue(value);
        }
    };


    return (
        <div className={styles["game-row"]}>
            <form>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    maxLength={inputLength}
                    required
                />
            </form>
        </div>
    );
};

export default FiveCharForm;
