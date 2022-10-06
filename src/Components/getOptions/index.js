import React from "react"

export const currency = ['UAH', 'USD', 'EUR']

export default function getOptions() {
    return currency.map((option) => <option key={option} value={option}>{option}</option>)
}