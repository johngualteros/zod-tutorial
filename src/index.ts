import {string, z} from 'zod';

const personSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    age: z.number(),
});
const addressSchema = z.object({
    street: z.string(),
    city: z.string(),
});
const stringSchema = z.string();

const numbersArraySchema = z.array(z.number());
const userArraySchema = z.array(personSchema);

userArraySchema.parse([
    {
        name: 'John',
        email: 'dhwnd@gmail.com',
        age: 20,
    },
    {
        name: 'Jane',
        email: 'dbw@gmail.com',
        age: 30,
    }
]);

type numbersArraySchema = z.infer<typeof numbersArraySchema>;

numbersArraySchema.parse([1, 2, 3]);

const response = stringSchema.safeParse('hello'); // {success: true, data: 'hello'}
console.log(response);

const citizenSchema = personSchema.merge(addressSchema);

type PersonType = z.infer<typeof personSchema>;
type CitizenType = z.infer<typeof citizenSchema>;

const userInput: PersonType = {
    name: 'John',
    email: 'gualterosjohn@gmail.com',
    age: 25,
}

const citizen: CitizenType = {
    name: 'John',
    email: 'g@gmail.com',
    age:  17,
    street: 'london',
    city: 'Kingdom'
}

personSchema.parse({
    name: 'John',
    email: 'john@gmail.com',
    age: 18
});



