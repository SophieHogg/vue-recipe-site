import { onChangeSelectedTab } from "../src/helpers";
import { ref } from "vue";
import { describe, it, expect } from "vitest";

describe("app functions", () => {
    const selectedTab = ref("");
    it("onChangeSelectedTab function should change the value of selectedTab", () => {
        onChangeSelectedTab(selectedTab, "Orange");
        expect(selectedTab.value).toBe("Orange");
    });
});
