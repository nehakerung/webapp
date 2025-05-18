from playwright.sync_api import expect
from pytest_bdd import given, scenarios, then, when

scenarios("path/to/your/feature/file.feature")


@given("I am logged in")
def step_impl_logged_in(page):
    page.goto("http://127.0.0.1:8000/")


@when("I click login and enter my login details")
def step_impl_login(page):
    page.get_by_role("textbox", name="Username").click()
    page.get_by_role("textbox", name="Username").fill("angelina")
    page.get_by_role("textbox", name="Password").click()
    page.get_by_role("textbox", name="Password:").fill("mnbvcxz1.")
    page.get_by_role("button", name="Login").click()


@then("Then I seen logged in page")
def step_impl_logged_in_page(page):
    expect(page.get_by_text("New Post")).to_be_visible()


@when("I click to create and publish a new post")
def step_impl_create_post(page):
    page.get_by_role("link", name="New Post").click()
    page.get_by_role("textbox", name="Title:").click()
    page.get_by_role("textbox", name="Title:").press("CapsLock")
    page.get_by_role("textbox", name="Title:").fill("May Day")
    page.get_by_role("textbox", name="Content:").click()
    page.get_by_role("textbox", name="Content:").press("CapsLock")
    page.get_by_role("textbox", name="Content:").fill("It's a day in may!")
    page.get_by_role("button", name="Post").click()


@then("Then I can see my published post")
def step_impl_see_post(page):
    page.get_by_role("link", name="Django Blog").click()
    expect(page.get_by_text("May Day")).to_be_visible()
