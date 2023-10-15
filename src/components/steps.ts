import { StepInfo } from '@/components/StepInfo'

export const steps: StepInfo[] = [
    {
        number: 1,
        title: "YOUR INFO",
        subtitle: "Please provide your name, email address and phone number",
        inputs: [
            {
                name: 'Name',
                placeholder: "name",
                type: 'text'
            },
            {
                name: 'Email',
                placeholder: "email@email.com",
                type: 'email'
            },
            {
                name: 'Phone Number',
                placeholder: "+00 000 000000000",
                type: 'email'
            }
        ]
    },
    {
        number: 2,
        title: "SELECT PLAN",
        subtitle: "You have the option of monthly or yearly billing",
        inputs: [
            {
                name: 'Name',
                placeholder: "name",
                type: 'text'
            },
            {
                name: 'Email',
                placeholder: "email@email.com",
                type: 'email'
            },
            {
                name: 'Phone Number',
                placeholder: "+00 000 000000000",
                type: 'email'
            }
        ]
    },
    {
        number: 3,
        title: "ADD-ONS",
        subtitle: "You have the option of monthly or yearly billing",
        inputs: [
            {
                name: 'Name',
                placeholder: "name",
                type: 'text'
            },
            {
                name: 'Email',
                placeholder: "email@email.com",
                type: 'email'
            },
            {
                name: 'Phone Number',
                placeholder: "+00 000 000000000",
                type: 'email'
            }
        ]
    },
    {
        number: 4,
        title: "SUMMARY",
        subtitle: "You have the option of monthly or yearly billing",
        inputs: [
            {
                name: 'Name',
                placeholder: "name",
                type: 'text'
            },
            {
                name: 'Email',
                placeholder: "email@email.com",
                type: 'email'
            },
            {
                name: 'Phone Number',
                placeholder: "+00 000 000000000",
                type: 'email'
            }
        ]
    }
]