#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QDesktopServices>
#include <QProcess>
#include <qurl.h>

using namespace std;

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::on_ConfigORCA_clicked()
{
    QProcess *myProcess1 = new QProcess(this);
    myProcess1->start("kcmshell5 kcmaccess");
}

void MainWindow::on_Discord_clicked()
{
    QDesktopServices::openUrl(QUrl("https://discord.gg/zG7g8cU", QUrl::TolerantMode));
}

void MainWindow::on_Forum_clicked()
{
    QDesktopServices::openUrl(QUrl("https://forum.dvkbuntu.org", QUrl::TolerantMode));
}

void MainWindow::on_OuvrirChromium_clicked()
{
    QProcess *myProcess2 = new QProcess(this);
    myProcess2->start("/usr/bin/chromium-browser");
}

void MainWindow::on_OuvrirKmag_clicked()
{
    QProcess *myProcess3 = new QProcess(this);
    myProcess3->start("/usr/bin/kmag");
}

void MainWindow::on_OuvrirSiteWeb_clicked()
{
    QDesktopServices::openUrl(QUrl("https://www.dvkbuntu.org", QUrl::TolerantMode));
}

void MainWindow::on_Contacts_clicked()
{
    QDesktopServices::openUrl(QUrl("mailto:handyopensourcedvkbuntu@gmail.com?subject=DVKBuntu&body=Bonjour \n \n \nCordialement\nPrénom Nom"));
}
