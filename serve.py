from flask import Flask, render_template, send_from_directory, Blueprint


serve = Blueprint(import_name=__name__, static_folder="build/static", template_folder="build", name="serve")


@serve.route("/manifest.json")
def manifest():
    return send_from_directory('./build', 'manifest.json')


@serve.route('/favicon.ico')
def favicon():
    return send_from_directory('./build', 'favicon.ico')


@serve.route('/logo192.png')
def logo192():
    return send_from_directory('./build', 'logo192.png')
