import { useMemo } from 'react';
import { useFormik } from "formik"
import { Container, Divider, Text } from "@chakra-ui/react";
import Input from "./input"
import Label from "./label";

interface FormValues {
  n: number
  m: number
  lambda: number
  Tobs: number
  Lg: number
  Pvidm: number
}

const fields = ["n", "m", "lambda", "Tobs", "Lg", "Pvidm"] as const

const Home: React.FC = () => {
  const initialValues = useMemo<FormValues>(() => ({
    n: 0,
    m: 0,
    lambda: 0,
    Tobs: 0,
    Lg: 0,
    Pvidm: 0
  }), [])

  const { values, handleChange } = useFormik<FormValues>({
    initialValues,
    onSubmit: (data) => console.log(data)
  })

  const mappedInputs = fields.map((fieldId) => (
    <Input key={fieldId} id={fieldId} value={values[fieldId]} handleChange={handleChange} />
  ))

  const a = (1 - values.Pvidm) * values.lambda
  const mu = 1 / values.Tobs
  const nser = a / mu
  const ls = values.Lg + nser
  const ws = ls / a
  const wg = values.Lg / a
  const wsBal = wg + values.Tobs

  const labels = [
    { title: "A", value: a },
    { title: "mu", value: mu },
    { title: "Nser", value: nser },
    { title: "Ls", value: ls },
    { title: "Ws", value: ws },
    { title: "Wg", value: wg },
    { title: "WsBal", value: wsBal },
  ]

  const mappedLabels = labels.map((label) => (
    <Label key={label.title} title={label.title} value={label.value} />
  ))

  return (
    <Container maxW="lg" className="h-screen py-5 flex flex-col items-center justify-center">
      <div className="p-5 rounded-lg shadow-md">
        <div className="w-full pb-5 flex flex-col gap-5">
          {mappedInputs}
        </div>
        <Divider />
        <div className="pt-5 flex flex-col gap-1">
          {mappedLabels}
          <div className="pt-5">
            {!!ws && <Text fontSize='sm'>Ws little {ws}</Text>}
            {!!wsBal && <Text fontSize='sm'>Ws bal {wsBal}</Text>}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;