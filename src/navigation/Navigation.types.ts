export enum Navigators {
  HomeNavigator = 'Home',
  SettingsNavigator = 'Settings',
  MainNavigator = 'MainNavigator',
}

export enum OnboardingScreens {
  LandingScreen = 'LandingScreen',
  LocationScreen = 'LocationScreen',
}

export enum HomeStackScreens {
  ChooseCategoryScreen = 'Choose Category',
  AllCategoriesScreen = 'AllCategoriesScreen',
  CategoriesScreen = 'CategoriesScreen',
  CategoryScreen = 'CategoryScreen',
}

export enum SettingsStackScreens {
  SettingsScreen = 'SettingsScreen',
}

export type HomeStackParamList = {
  [HomeStackScreens.ChooseCategoryScreen]: undefined;
  [HomeStackScreens.AllCategoriesScreen]: { category: CATEGORIES };
  [HomeStackScreens.CategoriesScreen]: { categoryType: types };
  [HomeStackScreens.CategoryScreen]: undefined;
};

export enum CATEGORIES {
  places = 'Places',
  activities = 'Activities',
}
