# Design Guidelines for Qwipo SmartRetail MSME B2B Platform

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern B2B dashboards like Linear, Notion, and enterprise platforms. Focus on professional, clean aesthetics that build trust with small business owners while maintaining usability for data-heavy interfaces.

## Core Design Elements

### Color Palette
**Primary Colors:**
- Primary Blue: 215 85% 25% (professional trust)
- Light Blue: 215 75% 95% (backgrounds)
- Dark Gray: 220 15% 20% (text/headers)
- Medium Gray: 220 10% 60% (secondary text)

**Accent Colors:**
- Success Green: 145 70% 45% (positive metrics)
- Warning Orange: 35 85% 55% (alerts)
- Background White: 0 0% 98%

### Typography
- **Primary Font**: Inter or similar clean sans-serif
- **Headings**: 600-700 weight, 1.2em-2em sizes
- **Body Text**: 400 weight, 14-16px
- **Metrics/Numbers**: 600 weight for emphasis

### Layout System
- **Container Width**: Max 1200px with centered alignment
- **Spacing Units**: 8px, 16px, 24px, 32px, 48px
- **Card Padding**: 24px standard, 16px on mobile
- **Grid Gaps**: 24px desktop, 16px mobile

### Component Library

**Navigation:**
- Fixed top navbar (64px height) with logo left, profile dropdown right
- Left sidebar (240px width) with collapsible mobile hamburger menu
- Clean navigation items with subtle hover states

**Cards & Containers:**
- Rounded corners (8px radius)
- Subtle shadows (0 2px 8px rgba(0,0,0,0.1))
- White backgrounds with 1px light gray borders

**Data Displays:**
- Metrics cards with large numbers and descriptive labels
- Product cards with 3:2 aspect ratio images
- Table rows with alternating backgrounds for order history

**Forms & Interactions:**
- Input fields with 1px borders, 4px radius
- Primary buttons with gradient backgrounds
- Subtle hover animations (0.2s transitions)

### Responsive Behavior
- **Desktop**: 3-4 column product grids, full sidebar visible
- **Tablet**: 2-3 column grids, collapsible sidebar
- **Mobile**: Single column, hamburger navigation

### Images
**Product Images**: 
- Placeholder images for grocery items, restaurant supplies, retail products
- 300x200px cards with rounded corners
- Use food/retail stock photos or simple product illustrations

**No Hero Image**: This is a dashboard application focused on functionality rather than marketing appeal.

**Dashboard Icons**:
- Simple line icons for navigation (dashboard, orders, recommendations, insights)
- Status indicators for metrics (up/down arrows, progress indicators)

### Visual Hierarchy
- **Primary Actions**: Blue buttons with white text
- **Secondary Actions**: Outlined buttons with blue borders
- **Emphasis**: Bold typography for metrics and key data points
- **Grouping**: Card-based layouts with consistent spacing

This design prioritizes clarity, trust, and efficiency for small business owners managing their purchasing decisions through data-driven recommendations.
