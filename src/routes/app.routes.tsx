import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Groups } from "@screens/Groups"
import { NewGroup } from "@screens/NewGroup"
import { Players } from "@screens/Players"

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return(
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen component={Groups} name="Groups" />
      <Screen component={NewGroup} name="NewGroup" />
      <Screen component={Players} name="Players" />
    </Navigator>
  )
}