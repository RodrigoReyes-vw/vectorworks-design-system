# Tokens
Design tokens are special variables used to maintain a scalable visual system for UI development and brand consistency. They represent design decisions and agreements that define the foundation of Vectorworks's visual language, these include color, typography and spacing.

Visit the [Tokens List](/tokens/tokens) to learn more.

Design tokens are key-value pairs. For example:

```scss
    //icon color in dark background 
    $vwui-icon-fill-on-dark: $vwui-color-white;
```
- The key name defines the context of how to apply the value in a specific context.
- The value represents a visual design attribute.
- The key replaces hard-coded values, such as hex values for colors or pixel values for spacing.

## Benefits
### Improved Development
- Promotes visual consistency and maintainability
- Aligns brand standards
- Consumers can stay in change with the changes with minimal impact to the code.
### Maintainability  
- When the team updates a **value**, like a new type face or color, the **tokens** do not need to be updated in 
code.

### Consistency across plataforms
- Allows the distribution of the Vectorworks's visual language across multiple platforms and properties
- Ensures brand consistency across digital assets

### Extensibility
- Designers and developers have access to design tokens when creating custom components for their applications (within brand standards)  
## Use When
Design Tokens can be used by teams:
- To create custom components that are visually aligned to the brand styles
- To create new components that can be contributed back to the system
## Don't Use When

- Don’t use design tokens to make modifications to an existing component. Instead, submit a request 
to the team or talk to us.

- Don’t use design tokens to only access a value or values when the token name does not match it's application(for example, don't use a 'color-background-button' token to style a border or an element that is not abutton). Instead create a local variable in your project or hardcode the desired value.

## Naming Structure for Design Tokens

The naming structure for design tokens follows:
- **Category**: Top level that contains foundational elements such as text, color, spacing
- **Property**: What are affecting on with the token, opacity,color,size.
- **Concept**: Meaning and use of  token
- **Variant**: Describes the different options a token can have
- **State**: Describes state for a token
- **Scale**: Describes size for a token, if applicable
- **BreakPoint**: On what breakpoint is the token applied
- **Surface**: On what background is the token applied

| Category  | Property  | Concept  |  Variant |State   |  Scale |  BreakPoint | Surface   |
|---        |---        |---       |---       |---     |---     |---          |---        |
|           | color     |          |          | teal   |        |             |           |
|           | color     | feedback |  success |        |        |             |           |
|           | font      | size     |          |        |  62    |             |           |
|---        |---        |---       |---       |---     |---     |---          |---        |