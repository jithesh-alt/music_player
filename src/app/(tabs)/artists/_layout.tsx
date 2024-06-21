import { StackScreenWithSearchBar } from '@/constants/layout'
import { defaultStyle } from '@/styles'
import { Stack } from 'expo-router'
import { View } from 'react-native'

const ArtistsScreenLayout = () => {
	return (
		<View style={defaultStyle.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						...StackScreenWithSearchBar,
						headerTitle: 'Artists',
					}}
				/>
			</Stack>
		</View>
	)
}
export default ArtistsScreenLayout
