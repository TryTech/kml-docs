import { Callout } from "nextra-theme-docs";

export default function NotStable() {
    return (
        <Callout type="warning" emoji="⚠️">
            <p>
                This feature is not stable yet. Please wait for the stable release.
            </p>
        </Callout>
    )
}