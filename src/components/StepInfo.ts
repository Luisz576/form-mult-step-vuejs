export interface Input{
    type: 'text' | 'email' | "number" | "date",
    placeholder: string,
    name: string
}

interface StepInfoProps{
    number: number,
    title: string,
    subtitle: string
    inputs: Array<Input>
}

export class StepInfo{
    number: number
    title: string
    subtitle: string
    inputs: Array<Input>

    constructor(props: StepInfoProps){
        this.number = props.number
        this.title = props.title
        this.subtitle = props.subtitle
        this.inputs = props.inputs
    }
}