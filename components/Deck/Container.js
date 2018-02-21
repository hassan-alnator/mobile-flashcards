import Decks from './Decks';
import {connect} from 'react-redux'

function mapStateToProps({
    decks,
    app
}, ownProps) {
    return {
        decks,
        isLoading: app.isLoading,
        ...ownProps
    }
}

export default connect(mapStateToProps)(Decks)