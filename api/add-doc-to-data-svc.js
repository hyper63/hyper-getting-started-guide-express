import { connect } from 'hyper-connect'

if (!process.env.HYPER) {
  console.log('****************')
  console.log(
    "ERROR:  MISSING HYPER CONNECTION STRING.  See Getting Started: https://docs.hyper.io/getting-started ",
  )
  console.log('****************')
}

const hyper = connect(process.env.HYPER)

export default async function (req, res) {
  
  return res.send("Adding a doc is incomplete!")
}