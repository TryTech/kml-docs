import { Callout } from "nextra-theme-docs";

export default function DeprecatedSoon() {
    return (
        <Callout type="warning" emoji="⚠️">
            <p>
                This feature is deprecated and will be removed soon. Please wait for the stable release.
            </p>
        </Callout>
    )
}