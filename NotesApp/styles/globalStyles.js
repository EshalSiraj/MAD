// styles/globalStyles.js
import { StyleSheet } from 'react-native';

export const colors = {
  // Brownish color palette
  primary: '#8B6914',      // Warm golden brown
  primaryDark: '#6B4E0A',  // Darker brown
  primaryLight: '#C4A35A', // Light golden brown
  secondary: '#D4A373',    // Soft warm beige
  background: '#FDF8F0',   // Creamy off-white
  surface: '#FFFFFF',      // White for cards
  text: '#4A3728',         // Dark brown text
  textLight: '#7A5C3A',    // Lighter brown text
  border: '#E8DCC8',       // Soft cream border
  error: '#C17A6E',        // Muted red-brown
  success: '#8B9A6E',      // Muted green-brown
  shadow: '#8B7355',       // Brown shadow
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.surface,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    elevation: 2,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: colors.primary,
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: colors.textLight,
    marginTop: 4,
  },
  input: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    color: colors.text,
    marginBottom: 16,
  },
  inputMultiline: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    color: colors.text,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    elevation: 2,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonPrimaryText: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  buttonSecondary: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonSecondaryText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  buttonDanger: {
    backgroundColor: colors.error,
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
  },
  buttonDangerText: {
    color: colors.surface,
    fontSize: 14,
    fontWeight: '600',
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: colors.textLight,
    marginBottom: 24,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 24,
  },
  textSmall: {
    fontSize: 14,
    color: colors.textLight,
  },
  textLarge: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.text,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyState: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: colors.textLight,
    fontStyle: 'italic',
  },
  errorText: {
    color: colors.error,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
  },
  successText: {
    color: colors.success,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
  },
});