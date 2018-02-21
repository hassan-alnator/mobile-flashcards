import Decks from './Decks';
import {connect} from 'react-redux'

const mapStateToProps = ({
    decks,
    app
}, ownProps) => ({
    decks,
    isLoading: app.isLoading,
    ...ownProps
})

export default connect(mapStateToProps)(Decks)