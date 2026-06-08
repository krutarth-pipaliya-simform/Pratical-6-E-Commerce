export const SideBar = () => {
    return (
        <aside className="sticky top-0 h-screen p-4 shadow-xl bg-[#FE7A04] text-white min-w-xs">
            <div>
                Category
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            id="Electronics"
                            name="Electronics"
                            value="Electronics"
                        />
                        <label htmlFor="vehicle1"> Electornics</label>
                    </li>
                    <li>
                        <input type="checkbox" id="Fashion" name="Fashion" value="Fashion" />
                        <label htmlFor="vehicle1"> Fashion</label>
                    </li>
                </ul>
            </div>
        </aside>
    );
};
