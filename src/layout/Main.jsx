import Text from '../components/Text'
import Button from '../components/Button'
import'./Main.css'

function Main() {
    return(
        <main>
            <Text game='comment va-tu?'/>
            <Text game='très bien et toi?' classe= 'text-blue'/>
            <Text game=' nickel !' classe= 'text-green'/>
            <Button/>
        </main>
    )
}

export default Main